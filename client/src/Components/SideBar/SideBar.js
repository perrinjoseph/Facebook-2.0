import React from "react";
import { useSelector } from "react-redux";
import ProfileTag from "../Reusable/ProfileTag/ProfileTag";
import RecentPicturePost from "../Reusable/RecentPicturePost/RecentPicturePost";
import SidebarMenu from "../Reusable/SidebarMenu/SidebarMenu";

function SideBar() {
  const reduxState = useSelector((state) => state);
  return (
    <aside className="sidebar">
      <ProfileTag
        firstname={reduxState.user.firstname}
        lastname={reduxState.user.lastname}
        username={reduxState.user.username}
      />
      <SidebarMenu />
      <RecentPicturePost />
    </aside>
  );
}

export default SideBar;
