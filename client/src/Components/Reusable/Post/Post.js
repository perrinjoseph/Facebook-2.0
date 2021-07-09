import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { AiOutlineLike, AiOutlineMessage } from "react-icons/ai";
import {
  IoHeartOutline,
  IoShareOutline,
  IoThumbsUpOutline,
} from "react-icons/io5";
import avatar from "../../../Images/avatar2.jpg";

function Post({ message, image, gif, username, name, proliPic }) {
  return (
    <section className="post">
      <header className="post__top">
        <Avatar src={avatar} />
        <div className="post__top__details">
          <span className="post__top__title">Perrin Joseph</span>
          <br></br>
          <small className="post__top__timestamp">11d </small>
        </div>
      </header>
      <main className="post__message">
        <p>{message}</p>
      </main>
      {image ? <img className="post__image" src={image}></img> : ""}
      <section className="post__buttons">
        <IconButton>
          <AiOutlineLike />
        </IconButton>
        <IconButton>
          <AiOutlineMessage />
        </IconButton>
        <IconButton>
          <IoShareOutline />
        </IconButton>
      </section>
    </section>
  );
}

export default Post;
