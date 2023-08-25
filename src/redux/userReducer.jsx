const initialState = {
    cognito: null,
    appsync: null
};

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case "SET_USER_COGNITO":
            return {
                ...state,
                cognito: action.data
            };

        case "SET_USER_APPSYNC":
            return {
                ...state,
                appsync: action.data
            };

        case "GET_USER":
            return {
                ...state,
                data: action.data
            };

        default:
            return { ...state };
    }
};