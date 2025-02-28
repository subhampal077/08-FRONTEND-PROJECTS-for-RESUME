import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  //   console.log(signIn);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          onClick={() => setSignIn(false)}
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix_logo"
        />
        {!signIn ? (
          <button
            onClick={() => setSignIn(true)}
            className="loginScreen__button"
          >
            Sign In
          </button>
        ) : null}

        <div className="loginScreen_gradient"></div>
      </div>

      <div className="loginScreen__body">
        {!signIn ? (
          <>
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Starts at ₹149. Cancel at any time.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="loginScreen__input">
              <form>
                <input type="email" required placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        ) : (
          <SignInScreen />
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
