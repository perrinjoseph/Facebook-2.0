import { Avatar } from "@material-ui/core";
import React from "react";
import pj from "../../../Images/avatar2.jpg";

function ProfileTag({ type, online }) {
  return (
    <article className={`profile-tag ${type === "contact" ? "contact" : ""}`}>
      <div style={{ position: "relative" }}>
        <Avatar
          src={pj}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "15px",
          }}
        ></Avatar>
        {type === "contact" && online === true ? (
          <div className="badge">
            <div className="badge--effect"></div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="profile-tag__details">
        <span className="profile-name">Perrin Joseph</span>
        <br></br>
        {type !== "contact" ? (
          <small className="light-text">@perrinjoseph</small>
        ) : (
          ""
        )}
      </div>
      {type !== "contact" ? <h1 className="logout">Logout</h1> : ""}
    </article>
  );
}

export default ProfileTag;
