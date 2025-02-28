import React, { useEffect, useRef, useState } from "react";
import "./SignInScreen.css";
import { auth } from "../dbFIrebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        // Signed up successfully
        // console.log(authUser);
        console.log("Successfully Signed up");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  function signIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        // Signed in
        // console.log(authUser);
        console.log("Successfully Signed in");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div className="signInScreen">
      <form className="signInScreen__form">
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" required ref={emailRef} />

        <input
          type="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />

        <button onClick={signIn} type="submit">
          Sign In
        </button>

        <h4>
          New to Netflix?&nbsp;
          <span onClick={register} className="signInScreen__spanLink">
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
