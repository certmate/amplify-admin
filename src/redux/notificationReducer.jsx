const initialState = {
    ordersAwaitingPickup: 0,
    booksAwaitingApproval: 0,
    authorsAwaitingApproval: 0,
    genreAwaitingApproval: 0,
};

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_NOTIFICATIONS":
            return {
                ...state,
                ...action.data
            };
        case "SET_ORDERS_AWAITING_PICKUP":
            return {
                ...state,
                ordersAwaitingPickup: action.data
            };
        case "SET_BOOKS_AWAITING_APPROVAL":
            return {
                ...state,
                booksAwaitingApproval: action.data
            };
        case "SET_AUTHORS_AWAITING_APPROVAL":
            return {
                ...state,
                authorsAwaitingApproval: action.data
            };
        case "SET_GENRE_AWAITING_APPROVAL":
            return {
                ...state,
                genreAwaitingApproval: action.data
            };
        default:
            return { ...state };
    }
};