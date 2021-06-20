import React from "react";
import ProfileTag from "../Reusable/ProfileTag/ProfileTag";
import RecentPicturePost from "../Reusable/RecentPicturePost/RecentPicturePost";
import SidebarMenu from "../Reusable/SidebarMenu/SidebarMenu";

function SideBar() {
  return (
    <aside className="sidebar">
      <ProfileTag />
      <SidebarMenu />
      
      <RecentPicturePost />
    </aside>
  );
}

export default SideBar;
