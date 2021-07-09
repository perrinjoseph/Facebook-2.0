import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../../../Images/facebook.svg";
import Axios from "../../../axios/Axios";
import { useDispatch } from "react-redux";
import allAction from "../../../Redux/Actions";
import { useHistory } from "react-router-dom";
import useIsAuthorized from "../../../hooks/useIsAuthorized";
import Button from "../../Reusable/Button/Button";
import useVerifyAuth from "../../../hooks/useVerifyAuth";
import { thunkResetPassword } from "./Redux/thunks";
import { Fade } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("msg");
  const dispatch = useDispatch();
  const history = useHistory();
  const [reset, setReset] = useState(false);

  useVerifyAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (password && confirmPassword) {
      console.log(history.location.pathname.split("/")[2]);
      const resetToken = history.location.pathname.split("/")[2];
      const response = await dispatch(thunkResetPassword(password, resetToken));
      if (response) {
        setError(response);
      } else {
        setReset(true);
        setError("msg");
      }
    }
  };
  return (
    <div className={`login ${reset ? "login__shrink" : ""}`}>
      {!reset ? (
        <>
          <img className="login__logo" src={facebook} alt="facebook logo"></img>
          <br></br>
          <p
            style={{
              color: `${error === "msg" ? "white" : "red"}`,
            }}
          >
            {error}
          </p>

          <form onSubmit={handelSubmit} className="login__form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create New Password"
              style={{
                border: `${
                  error === "msg" ? "3px solid white" : "3px solid pink"
                }`,
              }}
            ></input>
            <br></br>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm New Password"
              style={{
                border: `${
                  error === "msg" ? "3px solid white" : "3px solid pink"
                }`,
              }}
            ></input>
            {confirmPassword && confirmPassword !== password ? (
              <p style={{ color: "red" }}>Password should match </p>
            ) : (
              <p style={{ color: "white" }}>Error</p>
            )}
            <br></br>
            <div className="login__btn-container">
              <Button
                style={{ width: "100%" }}
                onClick={handelSubmit}
                text={"Reset Password"}
              ></Button>
            </div>
            <br></br>
          </form>
        </>
      ) : (
        <>
          <Fade timeout={1500} in={reset}>
            <CheckCircle
              style={{ fontSize: "100px", color: "rgb(7, 187, 7)" }}
            />
          </Fade>
          <p className="fadein-animation sent">Password Set</p>
          <p
            style={{
              textDecoration: "none",
              color: "#516a8d",
              textAlign: "center",
            }}
            className="fadein-animation"
          >
            Your password is now changed.<br></br> Please return to login to
            sign in to your account
          </p>
        </>
      )}
      <br></br>
      <Link style={{ textDecoration: "none", color: "#516a8d" }} to="/login">
        Back to login
      </Link>
    </div>
  );
}

export default ResetPassword;
