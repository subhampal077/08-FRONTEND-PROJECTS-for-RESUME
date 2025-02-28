import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./Message.css";

function Message({ username, message }) {
  const isUser = username === message.username;

  if (!username || !message.text) {
    return null;
  }

  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography
            className="message__text"
            color="black"
            variant="h5"
            component="h2"
          >
            {isUser ? message.text :`${message.username}: ${message.text}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
