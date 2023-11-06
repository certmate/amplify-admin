import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import VerticalLayout from "../layout/VerticalLayout";
import Error404 from "../view/pages/404";
import { routes } from '../settings';
import { entries, uniqueId } from "lodash";
import Base from "../view/pages/Base";
import BaseSearch from "../view/components/BaseSearch";
import BaseDashboard from "../view/components/BaseDashboard";
import { getUserFromAppSync } from "../common";
import ViewCert from "../view/components/custom/ViewCert";

export default function Router() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

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
                const data = await getUserFromAppSync(user.cognito);
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
        <Routes>
            <Route exact path='/open-cert/:id' element={<VerticalLayout><ViewCert /></VerticalLayout>} />

            {/* Routes > settings.json */}
            {entries(routes).map(([route, { title, model, filters, form, data, component }]) => <Route id={route} key={uniqueId()} path={route} element={
                <VerticalLayout>
                    {component?.({ form, route, title, filters, model, data }) || <Base route={route} title={title} filters={filters} model={model} form={form} data={data} />}
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