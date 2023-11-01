import { useEffect, useMemo } from "react";

// Motion

// Redux
import { useDispatch, useSelector } from "react-redux";

// Router
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// Layouts
import VerticalLayout from "../layout/VerticalLayout";

// Components
import Error404 from "../view/pages/404";
import { API, graphqlOperation } from 'aws-amplify';
import { routes } from '../settings';
import { entries, uniqueId } from "lodash";
import Base from "../view/pages/Base";
import { v4 } from "uuid";
import { createUserAndBase, getUser } from "../graphql/customQueries";
import BaseSearch from "../view/components/BaseSearch";
import BaseDashboard from "../view/components/BaseDashboard";

export default function Router() {
    // Redux
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { pathname, search, hash } = useLocation();

    const userFromAppSync = async cognitoUser => {
        const get = async cognitoUser => {
            try {
                return await API.graphql(
                    graphqlOperation(getUser, {
                        id: cognitoUser.attributes.email,
                    })
                );
            }
            catch (e) {
                return e;
            }
        }
        let d = await get(cognitoUser);

        if (!d.data.getUser) {
            try {
                const base = v4();

                await API.graphql(
                    graphqlOperation(createUserAndBase, {
                        user: {
                            id: cognitoUser.attributes.email,
                            email: cognitoUser.attributes.email,
                            base: base,
                            roles: ['Owner']
                        },
                        base: {
                            id: base
                        }
                    })
                );
                d = await get(cognitoUser);
            }
            catch (e) {
                console.log(e);
            }
        }

        // Update user pushToken + status
        if(d){
            try{
                await API.graphql(
                    graphqlOperation(`
                        mutation UpdateUser($input: UpdateUserInput!){
                            updateUser(input: $input){
                                id
                            }
                        }
                    `, {
                        input: {
                            id: d.data.getUser.id,
                            _version: d.data.getUser._version,
                            status: 'A'
                        }
                    })
                );

                d = await get(cognitoUser);
            }
            catch(e){
                console.log(e);
            }
        }

        return { ...d.data.getUser };
    }

    useEffect(() => {
        user && (async () => {
            // Checking for notifications - Orders Awaiting Pickup, New Books/Authors/Genres
            try {
                /**
                 * 1.   Create user if doesn't exist
                 * 2.   Onboard user - if not yet done
                 * 3.   Check for notifications
                 */
                // 1.
                const data = await userFromAppSync(user.cognito);
                dispatch({ type: 'SET_USER_APPSYNC', data });

                /**
                 * Check which models have settings
                 */
                // console.log({ schema, d: graphqlSchema.data.__schema.types.find(({ name }) => name === 'CreateUserInput') });
                // const query = `query GetNotifications{
                //     user: getUser(id: "${user.cognito.username}"){
                //         ${keys(routes).map(r => {
                //     if (routes[r].notificationFilter) {
                //         return `${schema.models[r].name}: get${schema.models[r].name}`
                //     }
                // }).filter(Boolean).join(`\n`)
                //     }
                //     }
                // }`;

                // const { data } = await API.graphql(graphqlOperation(getData));
                // dispatch({
                //     type: "SET_NOTIFICATIONS",
                //     data: {
                //         ordersAwaitingPickup: data.getIndex.ledger.items.length,
                //         booksAwaitingApproval: data.getIndex.books.items.length,
                //         authorsAwaitingApproval: data.getIndex.authors.items.length,
                //         genreAwaitingApproval: data.getIndex.genres.items.length,
                //     }
                // })
            }
            catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <Routes >
            {/* Routes > settings.json */}
            {entries(routes).map(([route, { title, model, filters, form, data, component }]) => <Route id={route} key={uniqueId()} path={route} element={
                <VerticalLayout>
                    {component?.({ form }) || <Base route={route} title={title} filters={filters} model={model} form={form} data={data} />}
                </VerticalLayout>
            } />)}

            {/* Home Page */}
            <Route exact path='/' element={<VerticalLayout><BaseDashboard /></VerticalLayout>} />

            {/* Search Page */}
            <Route exact id='search' key={uniqueId()} path='/search' element={
                <VerticalLayout>
                    <BaseSearch />
                </VerticalLayout>
            } />

            {/* NotFound */}
            <Route path='*' element={<Error404 />} />
        </Routes>
    );
};