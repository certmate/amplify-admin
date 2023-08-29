import { useEffect, useMemo } from "react";

// Motion

// Redux
import { useDispatch, useSelector } from "react-redux";

// Router
import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";

// Layouts
import VerticalLayout from "../layout/VerticalLayout";

// Components
import Error404 from "../view/pages/404";
import { API, graphqlOperation } from 'aws-amplify';
import { routes } from '../settings';
import { entries, keys, last, uniqueId, values } from "lodash";
import Base from "../view/pages/Base";
import { Cert } from "../models";
import { schema } from "../models/schema";
import graphqlSchema from "../graphql/schema.json";
import { v4 } from "uuid";
import { createUser } from "../graphql/mutations";
import { getUser } from "../graphql/queries";
import { createUserAndBase } from "../graphql/customQueries";

export default function Router() {
    // Redux
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { pathname, search, hash } = useLocation();
    const [...pathFragments] = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);

    const userFromAppSync = async cognitoUser => {
		const get = async cognitoUser => {
			try {
				return await API.graphql(
					graphqlOperation(getUser, {
						id: cognitoUser.username,
						favouritesShelf: `${cognitoUser.username}-f`
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
							id: cognitoUser.username,
							email: cognitoUser.attributes.email,
                            base: base
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

                console.log(data);

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
            {entries(routes).map(([route, { title, model, filters, form }]) => <Route id={route} key={uniqueId()} path={route} element={<VerticalLayout><Base route={route} title={title} filters={filters} model={model} form={form} /></VerticalLayout>} />)}

            {/* Home Page */}
            <Route exact path='/' element={<VerticalLayout><>Nik</></VerticalLayout>} />

            {/* NotFound */}
            <Route path='*' element={<Error404 />} />
        </Routes>
    );
};