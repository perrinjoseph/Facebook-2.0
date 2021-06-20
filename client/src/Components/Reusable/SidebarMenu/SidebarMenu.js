import React from "react";
import { BsHouse } from "react-icons/bs";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsPersonPlus } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { CgImage } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

function SidebarMenu() {
  return (
    <nav className="sidebar-menu">
      <ul className="sidebar-menu__list">
        <li className="sidebar-menu__item">
          <BsHouse color={"#516a8d"} />{" "}
          <span className="sidebar-menu__item__title">Home</span>
        </li>
        <li className="sidebar-menu__item">
          <IoStorefrontOutline color={"#516a8d"} />
          <span className="sidebar-menu__item__title">Marketplace</span>
        </li>
        <li className="sidebar-menu__item">
          <AiOutlineYoutube color={"#516a8d"} />
          <span className="sidebar-menu__item__title">Watch</span>
        </li>
        <li className="sidebar-menu__item">
          <CgProfile color={"#516a8d"} />
          <span className="sidebar-menu__item__title">Profile</span>
        </li>
        <li className="sidebar-menu__item">
          <IoSettingsOutline color={"#516a8d"} />
          <span className="sidebar-menu__item__title">Setting</span>
        </li>
        <li className="sidebar-menu__item">
          <CgNotes color={"#516a8d"} />
          <span className="sidebar-menu__item__title">Pages</span>
        </li>
        <li className="sidebar-menu__item">
          <BsPersonPlus color={"#516a8d"} />
          <span className="sidebar-menu__item__title">Friends</span>
        </li>
        <li className="sidebar-menu__item">
          <CgImage color={"#516a8d"} />
          <span className="sidebar-menu__item__title">Pictures</span>
        </li>
        <li className="sidebar-menu__item">
          <AiOutlineMessage color={"#516a8d"} />
          <span className="sidebar-menu__item__title">Messages</span>
        </li>
        <li className="sidebar-menu__item">
          <IoNotificationsOutline color={"#516a8d"} />
          <span className="sidebar-menu__item__title">Notifications</span>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarMenu;
