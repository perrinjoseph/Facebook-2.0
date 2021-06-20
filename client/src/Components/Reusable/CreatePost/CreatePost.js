import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import Button from "../Button/Button";
import IconButton from "@material-ui/core/IconButton";
import ImageOutline from "@material-ui/icons/ImageOutlined";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineGif } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";

function CreatePost({ image }) {
  const [selected, setSelected] = useState("message");
  return (
    <section className="create__post">
      <div className="create__post__top">
        <Avatar src={image} />
        <input
          className="create__post__top__input"
          type="text"
          placeholder="Tell us what's happening..."
        ></input>
        <Button text={"Post"} />
      </div>
      <div className="create__post__bottom">
        <IconButton onClick={() => setSelected("image")}>
          <ImageOutline
            style={{ color: `${selected === "image" ? "#6fd5cf" : ""}` }}
          />
        </IconButton>
        <IconButton onClick={() => setSelected("message")}>
          <AiOutlineMessage
            style={{ color: `${selected === "message" ? "#6fd5cf" : ""}` }}
          />
        </IconButton>
        <IconButton onClick={() => setSelected("gif")}>
          <AiOutlineGif
            style={{ color: `${selected === "gif" ? "#6fd5cf" : ""}` }}
          />
        </IconButton>
        <IconButton onClick={() => setSelected("video")}>
          <IoVideocamOutline
            style={{ color: `${selected === "video" ? "#6fd5cf" : ""}` }}
          />
        </IconButton>
      </div>
    </section>
  );
}

export default CreatePost;
