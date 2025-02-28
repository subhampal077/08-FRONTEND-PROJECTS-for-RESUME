import React, { useEffect, useState } from "react";
import {
  ArticleOutlined,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import InputOption from "./InputOption";
import Posts from "./Posts";
import { db } from "../firebase/firebase";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";
import FlipMove from "react-flip-move";
import "./Feed.css";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [refreshPost, setRefreshPost] = useState(false);

  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsQuery = query(
        collection(db, "posts"),
        orderBy("timestamp", "desc")
      );
      const postSnapshot = await getDocs(postsQuery);

      const postsData = postSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setPosts(postsData);
    };

    fetchPosts();
  }, [refreshPost]);

  // to avoid "block" the main thread async func
  async function sendPost(e) {
    e.preventDefault();
    setInput("");

    await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        setRefreshPost((prev) => !prev);
        console.log("Post Added!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          {/* material icon */}
          <Create />
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Start a post, try writing with AI"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={Image} color="#378FE9" />
          <InputOption title="Video" Icon={Subscriptions} color="#FFBA33" />
          <InputOption title="Event" Icon={EventNote} color="#C37D16" />
          <InputOption
            title="Write article"
            Icon={ArticleOutlined}
            color="#E06847"
          />
        </div>
      </div>

      {/* posts */}
      <FlipMove>
        {posts.map((post) => (
          <Posts
            key={post.id}
            name={post.data.name}
            description={post.data.description}
            message={post.data.message}
            photoUrl={post.data.photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
