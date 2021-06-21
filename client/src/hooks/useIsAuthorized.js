import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allAction from "../Redux/Actions";
import { useHistory } from "react-router-dom";

function useIsAuthorized() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.isAuth);
  const history = useHistory();
  useEffect(() => {
    const isAuth = localStorage.getItem("jwt_token");
    isAuth ? dispatch(allAction.setAuth()) : dispatch(allAction.setUnAuth());
    console.log(history.location.pathname);
    isAuth ? history.push("/home") : history.push("/login");
  }, []);
  return data;
}

export default useIsAuthorized;
