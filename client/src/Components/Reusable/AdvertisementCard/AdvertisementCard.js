import React from "react";

function AdvertisementCard({ image }) {
  return (
    <article className="advertisement-card">
      <img className="advertisement-card__image" src={image}></img>
      <div className="advertisement-card__details">
        <span className="advertisement-card__details__heading">DUBAI mall</span>
        <br></br>
        <p>
          <small>Hotels in dubai starting at 200Dhs per night</small>
        </p>
        <a href="#">visitus.com</a>
      </div>
    </article>
  );
}

export default AdvertisementCard;
