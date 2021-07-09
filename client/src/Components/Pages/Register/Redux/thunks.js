import { useHistory } from "react-router-dom";
import Axios from "../../../../axios/Axios";
import allAction from "../../../../Redux/Actions";

export const thunkRegisterUser = (
  firstname,
  lastname,
  username,
  email,
  password
) => async (dispatch) => {
  if ((username, email, password)) {
    try {
      const res = await Axios.post("/auth/register", {
        username,
        password,
        email,
        firstname,
        lastname,
      });
      dispatch(allAction.loginUser(res.data.user));
      console.log(res.data.user);
      console.log(res.data.token);
      const token = "Bearer" + " " + res.data.token;
      localStorage.setItem("jwt_token", JSON.stringify(token));
      dispatch(allAction.setAuth());
    } catch (err) {
      return err.response.data.error;
    }
  }
};
