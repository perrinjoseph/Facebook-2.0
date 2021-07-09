import React from "react";

export default function Button({ text, onClick, style }) {
  return (
    <button style={style} className="btn--accept" onClick={onClick}>
      {text}
    </button>
  );
}
