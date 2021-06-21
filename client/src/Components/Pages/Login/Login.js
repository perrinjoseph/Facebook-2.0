import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../../../Images/facebook.svg";
import Axios from "../../../axios/Axios";
import { useDispatch } from "react-redux";
import allAction from "../../../Redux/Actions";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("msg");
  const dispatch = useDispatch();
  const history = useHistory();
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
        localStorage.setItem("jwt_token", JSON.stringify(data.token));
        history.push("/home");
      } catch (err) {
        console.log(err);
        setError(err.response.data.error);
      }
    }
    if (!password && !email) setError("Please provide email and password");
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
        <br></br>
        <button onClick={handelSubmit}>Login</button>
        <br></br>
        <Link style={{ textDecoration: "none" }} to="/register">
          Sign up
        </Link>
      </form>
    </div>
  );
}

export default Login;
