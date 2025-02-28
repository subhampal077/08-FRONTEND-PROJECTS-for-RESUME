import React, { useState } from "react";
import Title from "../components/Title";

function Login() {
  const [currentSate, setCurrentState] = useState("Sign Up");

  return (
    <form className="m-auto mt-14 flex w-[90%] flex-col items-center gap-4 text-gray-800 sm:max-w-96">
      <div className="mb-2 mt-10 inline-flex items-center gap-2">
        <p className="font-['prata'] text-3xl">{currentSate}</p>
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      {currentSate === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          required
          className="w-full border border-gray-800 px-3 py-2"
          placeholder="Name"
        />
      )}
      <input
        type="email"
        required
        className="w-full border border-gray-800 px-3 py-2"
        placeholder="Email"
      />
      <input
        type="password"
        required
        className="w-full border border-gray-800 px-3 py-2"
        placeholder="Password"
      />

      <div className="mt-[-8px] flex w-full justify-between text-sm">
        <p className="cursor-pointer">Forgot your password?</p>

        {currentSate === "Sign Up" ? (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        )}
      </div>
      <button
        onClick={(e) => e.preventDefault()}
        className="mt-4 bg-black px-8 py-2 font-light text-white"
      >
        {currentSate === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
