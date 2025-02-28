import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/slices/userSlice";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  const dispatch = useDispatch();

  function loginToApp(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
        // console.log("Successfully Signed in", auth);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function register(e) {
    if (!name) {
      return alert("Please enter a full name!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // console.log("Successfully signed up", userAuth);

        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: imageURL,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: imageURL,
            })
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="login">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-blue-png-large-size.png"
        alt="linkedin-icon"
      />

      <form>
        <input
          placeholder="Full Name (required if Registering)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Profile image URL (Optional)"
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />

        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>

      <p>
        Not a member?&nbsp;
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
