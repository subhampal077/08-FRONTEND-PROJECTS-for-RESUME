import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../features/slices/userSlice";
import { auth } from "../firebase/firebase";

function Header() {
  const dispatch = useDispatch();

  function logOutApp() {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
          alt="linkedin-logo"
        />
        <div className="header__search">
          <SearchIcon htmlColor="#3C3D3E" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeRoundedIcon} />
        <HeaderOption title="MyNetwork" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption title="Me" avatar handleClick={logOutApp} />
      </div>
    </div>
  );
}

export default Header;
