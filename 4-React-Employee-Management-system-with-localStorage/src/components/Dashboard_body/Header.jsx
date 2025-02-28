import React, { useEffect } from "react";

function Header({ loggedInUserData, setUser }) {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", JSON.stringify(""));

    setUser(null); // logout from page
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {loggedInUserData?.firstName}👋
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className="rounded-sm bg-red-600 px-3 py-2 text-lg font-medium text-white"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
