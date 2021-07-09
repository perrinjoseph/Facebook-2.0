import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
import modalReducer from "../../Components/Reusable/ModalPopup/Redux/modalReducer";
import overlayReducer from "../../Components/Reusable/Overlay/Redux/overlayReducer";

const rootReducer = combineReducers({
  user: loginReducer,
  isAuth: authReducer,
  showModal: modalReducer,
  showOverlay: overlayReducer,
});

export default rootReducer;
