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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("msg");
  const dispatch = useDispatch();
  const history = useHistory();

  useVerifyAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (password && email) {
      try {
        const response = await Axios.post(
          "/auth/login",
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.data;
        console.log(data);
        setError("msg");
        setEmail("");
        setPassword("");
        dispatch(allAction.loginUser(data.user));
        dispatch(allAction.setAuth());
        const token = "Bearer" + " " + data.token;
        localStorage.setItem("jwt_token", JSON.stringify(token));
        history.push("/home");
      } catch (err) {
        console.log(err);
        setError(err.response.data.error);
      }
    }
    if (!password || !email) setError("Please provide email and password");
  };
  return (
    <div className="login">
      <img className="login__logo" src={facebook} alt="facebook logo"></img>
      <br></br>
      <p
        style={{
          color: `${error === "msg" ? "white" : "red"}`,
        }}
      >
        {error}
      </p>
      <br></br>
      <form onSubmit={handelSubmit} className="login__form">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          style={{
            border: `${error === "msg" ? "3px solid white" : "3px solid pink"}`,
          }}
        ></input>
        <br></br>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          style={{
            border: `${error === "msg" ? "3px solid white" : "3px solid pink"}`,
          }}
        ></input>
        <Link
          style={{
            textDecoration: "none",
            color: "gray",
            textAlign: "left",
            fontSize: "13px",
            marginLeft: "18px",
            marginTop: "15px",
          }}
          to="/forgotPassword"
        >
          Forgot Password
        </Link>
        <br></br>
        <div className="login__btn-container">
          <Button
            style={{ width: "100%" }}
            onClick={handelSubmit}
            text={"Login"}
          ></Button>
        </div>
        <br></br>
      </form>
      <br></br>
      <Link style={{ textDecoration: "none", color: "#516a8d" }} to="/register">
        Create an account
      </Link>
    </div>
  );
}

export default Login;
