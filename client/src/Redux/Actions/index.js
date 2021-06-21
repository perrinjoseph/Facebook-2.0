import { loginUser, logoutUser } from "./loginActions";
import { setAuth, setUnAuth } from "./authActions";

const allAction = {
  loginUser,
  logoutUser,
  setAuth,
  setUnAuth,
};

export default allAction;
