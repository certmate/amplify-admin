import { useEffect } from "react";

// Motion

// Redux
import { useDispatch, useSelector } from "react-redux";

// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import VerticalLayout from "../layout/VerticalLayout";

// Components
import Error404 from "../view/pages/404";
import { API, graphqlOperation } from 'aws-amplify';
import { routes } from '../settings';
import { entries, keys, uniqueId, values } from "lodash";
import Base from "../view/pages/Base";
import { Cert } from "../models";
import { schema } from "../models/schema";
import graphqlSchema from "../graphql/schema.json";

export default function Router() {
    // Redux
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        user && (async () => {
            // Checking for notifications - Orders Awaiting Pickup, New Books/Authors/Genres
            try {
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
            {entries(routes).map(([model, { title, route, filters, children, form }]) => (
                <Route id={route} key={uniqueId()} path={route} element={<VerticalLayout><Base route={route} title={title} filters={filters} model={model} form={form} /></VerticalLayout>}>
                    {/* 
                        Nesting 1 level deep - for more levels, add more nested maps 
                        BUT! - Menu should not be too nested. Use query params to pass filters
                    */}
                    <Route path="create" element={<>Create {title}</>} />
                    <Route path="update/:id" element={<>Update {title}</>} />
                    {entries(children).map(([model, { title, route, form }]) => (
                        <Route key={uniqueId()} path={route} element={<Base route={route} title={title} filters={filters} model={model} form={form} />} />
                    ))}
                    <Route path=":id" element={<>Show {title}</>} />
                </Route>
            ))}

            {/* Home Page */}
            <Route exact path='/' element={<VerticalLayout><>Nik</></VerticalLayout>} />

            {/* NotFound */}
            <Route path='*' element={<Error404 />} />
        </Routes>
    );
};