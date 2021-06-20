import React from "react";
import AdvertisementCard from "../Reusable/AdvertisementCard/AdvertisementCard";
import pic1 from "../../Images/dubai.png";
import pic2 from "../../Images/post2.jpeg";
import OnlineFriends from "../Reusable/OnlineFriends/OnlineFriends";
function NewsBar() {
  return (
    <div className="newsBar">
      <div className="newsBar--titles">
        <h4 className="section-title">Advertisements </h4>
      </div>
      <AdvertisementCard image={pic1} />
      <div className="newsBar--titles">
        <h4 className="section-title">Contacts </h4>
      </div>

      <OnlineFriends />
    </div>
  );
}

export default NewsBar;
