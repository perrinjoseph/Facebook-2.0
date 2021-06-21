import React, { useState } from "react";
import logo from "../../Images/facebook.svg";
import HouseIcon from "../../Images/NavIcons/Home logo.svg";
import WatchIcon from "../../Images/NavIcons/Video.svg";
import Market from "../../Images/NavIcons/Market.svg";
import Connect from "../../Images/NavIcons/Connect.svg";
import Avatar from "@material-ui/core/Avatar";
import pj from "../../Images/avatar2.jpg";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import NotficationIcon from "@material-ui/icons/Notifications";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav() {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropDown = () => {
    setDropdown(!dropdown);
  };
  return (
    <header className="nav">
      <ul className="nav__list">
        <li className="nav__left">
          <Link to="/home">
            <img className="nav__logo" src={logo}></img>
          </Link>
          <input
            placeholder="Search Facebook..."
            className="nav__search"
          ></input>
        </li>

        <li className="nav__center">
          <ul className="nav__list nav__icons">
            <li className="nav__item">
              <img className="nav__item__icon" src={HouseIcon}></img>
            </li>
            <li className="nav__item">
              <img className="nav__item__icon" src={WatchIcon}></img>
            </li>
            <li className="nav__item">
              <img className="nav__item__icon" src={Market}></img>
            </li>
            <li className="nav__item">
              <img className="nav__item__icon" src={Connect}></img>
            </li>
          </ul>
        </li>
        <div className="icon-show">
          <IconButton onClick={toggleDropDown}>
            <IoMdArrowDropdown
              className={`${
                dropdown ? "drow-down-arrow rotate-dropdown" : "drow-down-arrow"
              }`}
            />
          </IconButton>
        </div>
        <li className="nav__right icon-hide">
          <Link to="/profile">
            <Avatar style={{ width: "45px", height: "45px" }} src={pj} />
          </Link>
          <div className="icon-hide">
            <IconButton>
              <Add />
            </IconButton>
          </div>

          <div className="icon-hide">
            <IconButton>
              <NotficationIcon />
            </IconButton>
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
