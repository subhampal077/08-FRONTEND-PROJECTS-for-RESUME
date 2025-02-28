import { Button, FormControl, InputLabel, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Message from "./components/Message";
import db from "./db/Firebase.js";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [refreshPost, setRefreshPost] = useState(false);

  useEffect(() => {
    // run once when the app component loads
    setUsername(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    async function fetchMessages() {
      const messagesQuery = query(
        collection(db, "messages"),
        orderBy("timestamp", "desc")
      );

      const onSnapshot = await getDocs(messagesQuery);
      const messagesData = onSnapshot.docs.map((doc) => doc.data());

      setMessages(messagesData);
    }
    fetchMessages();
  }, [refreshPost]);

  async function sendMessage(e) {
    // all the logic to send a message
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        text: input,
        username: username,
        timestamp: serverTimestamp(),
      }).then(() => {
        setRefreshPost((prev) => !prev);
      });
    } catch (err) {
      console.error(err);
    }

    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  }

  return (
    <div>
      <div className="App">
        <header className="app__header">
          <h1 className="app__h1">Welcome to Messenger</h1>
          <h2 className="app__h2">Hello {username}</h2>
        </header>
        <form className="app__form">
          <FormControl className="app__formControl">
            <Input
              className="app__input"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <Button
              className="app__sendButton"
              disabled={!input}
              // variant="outlined"
              // size="small"
              type="submit"
              onClick={sendMessage}
            >
              <SendIcon />
            </Button>
          </FormControl>
        </form>
      </div>

      {messages.map((message, index) => (
        <Message key={index} username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
