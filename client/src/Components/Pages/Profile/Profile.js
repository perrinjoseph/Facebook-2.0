import React from "react";
import Layout from "../../Layout/Layout";
import StoryLayout from "../../Layout/StoryLayout/StoryLayout";
import post1 from "../../../Images/post2.jpeg";
import { Avatar } from "@material-ui/core";
import avatar from "../../../Images/avatar1.jpg";
import ProfileCardInfo from "../../Reusable/ProfileCards/ProfileCardInfo/ProfileCardInfo";

function Profile() {
  return (
    <main className="profile">
      <div className="profile-container">
        <img className="profile__timeline" src={post1}></img>
      </div>
      <ProfileCardInfo />
    </main>
  );
}

export default Profile;
