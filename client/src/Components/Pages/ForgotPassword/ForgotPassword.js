import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useVerifyAuth from "../../../hooks/useVerifyAuth";
import facebook from "../../../Images/facebook.svg";
import Button from "../../Reusable/Button/Button";
import CheckCircle from "@material-ui/icons/CheckCircle";
import { Fade } from "@material-ui/core";
import { thunkSendEmail } from "./Redux/thunks";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("msg");
  const dispatch = useDispatch();
  const [sent, sentSent] = useState(false);
  useVerifyAuth();
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      console.log("thunk sent");
      const response = await dispatch(thunkSendEmail(email));
      if (response === "User does not exist") {
        setError("User does not exist");
      } else {
        sentSent(true);
      }
    } else {
      setError("please enter email");
    }
  };

  useVerifyAuth();

  return (
    <div className={`login ${sent ? "login__shrink" : ""}`}>
      {!sent ? (
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
          <p
            style={{
              textDecoration: "none",
              color: "#516a8d",
              textAlign: "center",
            }}
          >
            Enter your registered email below <br></br>
            to recieve password reset instructions
          </p>
          <br></br>
          <form onSubmit={handelSubmit} className="login__form">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              style={{
                border: `${
                  error === "msg" ? "3px solid white" : "3px solid pink"
                }`,
              }}
            ></input>
            <br></br>

            <br></br>
            <div className="login__btn-container">
              <Button
                style={{ width: "100%" }}
                onClick={handelSubmit}
                text={"Send"}
              ></Button>
            </div>
            <br></br>
          </form>
        </>
      ) : (
        <>
          <Fade timeout={1500} in={sent}>
            <CheckCircle
              style={{ fontSize: "100px", color: "rgb(7, 187, 7)" }}
            />
          </Fade>
          <p className="fadein-animation sent">Sent</p>
          <p
            style={{
              textDecoration: "none",
              color: "#516a8d",
              textAlign: "center",
            }}
            className="fadein-animation"
          >
            You will receive password instructions<br></br> If there is an
            account registered with this email
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

export default ForgotPassword;
