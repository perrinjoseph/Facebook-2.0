import { Avatar } from "@material-ui/core";
import React from "react";
import avatar from '../../../../Images/avatar1.jpg';

function ProfileCardInfo() {
  return (
    <article className="profile__main">
      <div className="profile__info">
        <Avatar
          variant="rounded"
          style={{
            width: "160px",
            height: "160px",
            border: "3px solid white",
            marginTop: "-70px",
            borderRadius: "15px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
          src={avatar}
        />
        <div className="profile__info__right">
          <section className="profile__info__right__top"><h1 className="profile__info__name">Perrin Joseph</h1></section>
          <section className="profile__info__right__bottom">React developer</section>
        </div>
      </div>
    </article>
  );
}

export default ProfileCardInfo;
