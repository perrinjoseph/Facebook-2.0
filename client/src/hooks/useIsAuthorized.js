import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allAction from "../Redux/Actions";
import { useHistory } from "react-router-dom";
import Axios from "../axios/Axios";
import { thunkLogoutUser } from "../Components/Nav/Redux/thunks";

function useIsAuthorized() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data);
  const history = useHistory();
  useEffect(() => {
    const authorizeUser = async () => {
      console.log("use Auth is invoked");
      try {
        const response = await Axios.get("/private/", {
          headers: {
            authorization: JSON.parse(localStorage.getItem("jwt_token")),
          },
        });
        console.log(response);
        dispatch(allAction.setAuth());
        dispatch(allAction.loginUser(response.data.user));
        history.push(history.location.pathname);
      } catch (error) {
        const res = error.response?.data?.error;
        if (res === "jwt expired") {
          dispatch(thunkLogoutUser());
          history.push("/login");
          dispatch(allAction.showOverlay());
          dispatch(allAction.showModal());
        } else {
          console.log(error);
        }
      }
    };
    authorizeUser();
  }, []);
  return data.isAuth;
}

export default useIsAuthorized;
