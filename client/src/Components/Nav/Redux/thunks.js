import allAction from "../../../Redux/Actions";

export const thunkLogoutUser = () => (dispatch) => {
  localStorage.removeItem("jwt_token");
  dispatch(allAction.logoutUser());
  dispatch(allAction.setUnAuth());
};
