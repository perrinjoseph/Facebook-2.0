import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import facebook from "../../../Images/facebook.svg";
import { thunkRegisterUser } from "./Redux/thunks";
import useIsAuthorized from "../../../hooks/useIsAuthorized";
import Button from "../../Reusable/Button/Button";
import useVerifyAuth from "../../../hooks/useVerifyAuth";

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("msg");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const data = useIsAuthorized();

  useVerifyAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !password ||
      !confirmPassword ||
      !username ||
      !email ||
      !firstname ||
      !lastname
    ) {
      setError("Please provide all fields");
    } else {
      setError("msg");
      if (password === confirmPassword) {
        try {
          const catchError = await dispatch(
            thunkRegisterUser(firstname, lastname, username, email, password)
          );
          if (catchError) {
            throw new Error(catchError);
          }
          history.push("/home");
        } catch (error) {
          setError(error.message);
        }
      }
    }
  };

  return (
    <div className="login">
      <img className="login__logo" src={facebook} alt="facebook logo"></img>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          type="text"
          placeholder="First name"
        ></input>
        <br></br>
        <input
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          type="text"
          placeholder="Last name"
        ></input>
        <br></br>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Email"
        ></input>
        <br></br>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Create a username"
        ></input>
        <br></br>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Create a password"
        ></input>
        <br></br>
        <input
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          type="password"
          placeholder="Confirm password"
        ></input>
        {confirmPassword && confirmPassword !== password ? (
          <p style={{ color: "red" }}>Password should match </p>
        ) : (
          <p style={{ color: "white" }}>Error</p>
        )}

        <p
          style={{
            color: `${error === "msg" ? "white" : "red"}`,
          }}
        >
          {error}
        </p>
        <br></br>
        <div className="login__btn-container">
          <Button
            style={{ width: "100%" }}
            onClick={handleSubmit}
            text={"Login"}
          ></Button>
        </div>
        <br></br>
        <div className="login__btn-container">
          <Link
            style={{ textDecoration: "none", color: "#516a8d" }}
            to="/login"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
