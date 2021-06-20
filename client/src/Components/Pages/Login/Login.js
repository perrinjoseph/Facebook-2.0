import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../../../Images/facebook.svg";

function Login() {
  return (
    <div className="login">
      <img className="login__logo" src={facebook} alt="facebook logo"></img>
      <br></br>

      <form className="login__form">
        <input type="text" placeholder="Username"></input>
        <br></br>
        <input type="password" placeholder="Password"></input>
        <br></br>
        <button>Login</button>
        <br></br>
        <Link style={{ textDecoration: "none" }} to="/register">
          Sign up
        </Link>
      </form>
    </div>
  );
}

export default Login;
