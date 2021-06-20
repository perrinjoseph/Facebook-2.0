import { Avatar } from "@material-ui/core";
import React from "react";
import PostPicture from "../../../Images/postpicture.jpeg";
import pj from "../../../Images/avatar2.jpg";
import Button from "../Button/Button";
import IconButton from "@material-ui/core/IconButton";
import { BsArrowRight } from "react-icons/bs";

function RecentPicturePost() {
  return (
    <article className="sidebar-menu recent-picture-post">
      <div className="recent-picture-post__container">
        <div
          style={{ backgroundImage: `url(${PostPicture})` }}
          className="recent-picture-post__image"
        >
          <h1 className="recent-picture-post__details">
            How to build responsive websites
          </h1>
        </div>
        <div
          style={{ backgroundImage: `url(${PostPicture})` }}
          className="recent-picture-post__image--background"
        ></div>
        <Avatar
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "15px",
            marginLeft: "15px",
            marginTop: "15px",
            border: "3px solid white",
          }}
          src={pj}
        />
      </div>

      <div className="recent-picture-post__buttons">
        <Button text={"Visit Page"} />
        <IconButton style={{ width: "50px", height: "50px" }}>
          <BsArrowRight color={"gray"} size={30} />
        </IconButton>
      </div>
    </article>
  );
}

export default RecentPicturePost;
