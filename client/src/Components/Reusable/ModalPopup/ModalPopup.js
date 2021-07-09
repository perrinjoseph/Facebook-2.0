import React from "react";
import { useDispatch } from "react-redux";
import allAction from "../../../Redux/Actions";

function ModalPopup({ text, img, alt, subtext }) {
  const dispatch = useDispatch();
  const handelCloseModal = (e) => {
    dispatch(allAction.hideModal());
    dispatch(allAction.hideOverlay());
  };
  return (
    <article className="modal-popup">
      <div onClick={handelCloseModal} className="modal-popup__close"></div>
      <section className="modal-popup__container">
        <object className="modal-popup__img" data={img}></object>
        <aside>
          <h1 className="modal-popup__text">{text}</h1>
          <h4 className="modal-popup__subText">{subtext}</h4>
        </aside>
      </section>
    </article>
  );
}

export default ModalPopup;
