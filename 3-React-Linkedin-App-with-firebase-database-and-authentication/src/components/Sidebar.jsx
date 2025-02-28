import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (item) => (
    <div className="sidebar__recentItem">
      <div className="sidebar__hash">#</div>
      <p>{item}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__info">
        <div className="sidebar__top">
          <img
            src="http://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.21&ixid=MXwxMjA3fDB8MHxleHBs3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
            alt="bg-image"
          />
          <div className="sidebar__top1">
            <Avatar className="sidebar__avatar" src={user.photoUrl}>
              {user.displayName?.[0]}
            </Avatar>
            <h3>{user.displayName}</h3>
            <h4>{user.email}</h4>
          </div>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Profile viewers</p>
            <p className="sidebar__statNumber">30</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">800</p>
          </div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__recent">
          <p>Recent</p>
          {recentItems("reactjs")}
          {recentItems("javascript")}
          {recentItems("softwaredevelopment")}
          {recentItems("programming")}
          {recentItems("frontenddevs")}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
