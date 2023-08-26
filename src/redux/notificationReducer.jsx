export default function notificationReducer(state = {}, action) {
    switch (action.type) {
        case "SET_NOTIFICATIONS":
            return {
                ...state,
                ...action.data
            };
        default:
            return { ...state };
    }
};