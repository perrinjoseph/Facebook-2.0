import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  user: loginReducer,
  isAuth: authReducer,
});

export default rootReducer;
