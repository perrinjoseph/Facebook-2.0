import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../Images/facebook.svg";
function Register() {
  return (
    <div className="login">
      <img className="login__logo" src={facebook} alt="facebook logo"></img>
      <br></br>
      <form className="login__form">
        <input type="text" placeholder="First name"></input>
        <br></br>
        <input type="text" placeholder="Last Name"></input>
        <br></br>
        <input type="text" placeholder="Create a username"></input>
        <br></br>
        <input type="password" placeholder="Create a password"></input>
        <br></br>
        <button>Sign up</button>
        <br></br>
        <Link style={{ textDecoration: "none" }} to="/login">
          Already have an account
        </Link>
      </form>
    </div>
  );
}

export default Register;
