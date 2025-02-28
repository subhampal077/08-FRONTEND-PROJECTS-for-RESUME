import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="rounded-xl border-2 border-red-600 bg-[#1C1C1C] px-8 py-10">
        <form
          onSubmit={submitHandler}
          className="flex w-full flex-col items-center justify-center"
        >
          <input
            required
            className="w-[290px] rounded-xl border-2 border-red-600 bg-transparent px-4 py-3 text-xl outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            className="mt-3 w-[290px] rounded-xl border-2 border-red-600 bg-transparent px-4 py-3 text-xl outline-none"
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="mt-5 rounded-xl border-none bg-red-600 px-10 py-2.5 text-xl outline-none"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
