import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";

function HeaderOption({ Icon, title, handleClick, avatar }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={handleClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.displayName?.[0]}
        </Avatar>
      )}
      <h5 className="headerOption__title">{title}</h5>
    </div>
  );
}

export default HeaderOption;
