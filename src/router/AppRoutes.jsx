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

export default function AppRoutes() {
    // Redux
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        user && (async () => {
            // Checking for notifications - Orders Awaiting Pickup, New Books/Authors/Genres
            // try{
            //     const { data } = await API.graphql(graphqlOperation(getData));
            //     dispatch({
            //         type: "SET_NOTIFICATIONS",
            //         data: {
            //             ordersAwaitingPickup: data.getIndex.ledger.items.length,
            //             booksAwaitingApproval: data.getIndex.books.items.length,
            //             authorsAwaitingApproval: data.getIndex.authors.items.length,
            //             genreAwaitingApproval: data.getIndex.genres.items.length,
            //         }
            //     })
                
            // }
            // catch(e){
            //     console.log(e);
            // }
        })();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={'/orders/:filter'} render={() => <VerticalLayout><Orders /></VerticalLayout>} /> */}

                {/* Home Page */}
                <Route exact path='/' element={<VerticalLayout><>Nik</></VerticalLayout>} />

                {/* NotFound */}
                <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};