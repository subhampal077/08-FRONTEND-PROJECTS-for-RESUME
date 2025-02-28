import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="post__buttons">
        <InputOption title="Like" Icon={ThumbUpAltOutlined} />
        <InputOption title="Comment" Icon={ChatOutlined} />
        <InputOption title="Repost" Icon={ShareOutlined} />
        <InputOption title="Send" Icon={SendOutlined} />
      </div>
    </div>
  );
});

export default Posts;
