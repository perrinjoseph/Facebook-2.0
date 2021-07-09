import { loginUser, logoutUser } from "./loginActions";
import { setAuth, setUnAuth } from "./authActions";
import {
  showModal,
  hideModal,
} from "../../Components/Reusable/ModalPopup/Redux/actions";
import {
  showOverlay,
  hideOverlay,
} from "../../Components/Reusable/Overlay/Redux/actions";
const allAction = {
  loginUser,
  logoutUser,
  setAuth,
  setUnAuth,
  showModal,
  hideModal,
  showOverlay,
  hideOverlay,
};

export default allAction;
