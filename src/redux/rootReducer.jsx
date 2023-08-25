import { combineReducers } from "redux";

import notificationReducer from "./notificationReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	user: userReducer,
	notification: notificationReducer,
});

export default rootReducer;