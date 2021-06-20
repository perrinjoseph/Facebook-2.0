import { Avatar } from "@material-ui/core";
import React from "react";

function Story({ avatar, name, image }) {
  return (
    <section style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar
        style={{
          position: "absolute",
          marginLeft: "10px",
          marginTop: "10px",
          border: "3px solid white",
          width:"50px",
          height:"50px"
        }}
        src={avatar}
      />
        <span className="story__title">{name}</span>
    </section>
  );
}

export default Story;
