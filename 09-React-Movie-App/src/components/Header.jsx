import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { Link, NavLink, useNavigate } from "react-router";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-950 bg-opacity-75 z-50 shadow-md">
      <div className="mx-auto px-4 sm:px-8 md:px-10 py-3 flex items-center gap-4 max-w-7xl">
        <Link to={"/"}>
          <img src={logo} alt="logo-img" width={120} />
        </Link>

        <div className="md:flex gap-4 hidden">
          <NavLink
            className={({ isActive }) =>
              `hover:text-neutral-100 ${isActive && "text-white"}`
            }
            to={"/tv"}
          >
            <p>TV Shows</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-neutral-100 ${isActive && "text-white"}`
            }
            to={"/movie"}
          >
            <p>Movies</p>
          </NavLink>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                navigate(`/search?q=${e.target.value}`);
              }}
              className="outline-none hidden md:block bg-transparent px-2 py-1 text-white font-semibold"
              type="text"
              placeholder="Search for a movie..."
            />
            <Link to={"/search"}>
              <button>
                <IoSearchOutline className="text-white text-xl" />
              </button>
            </Link>
          </form>

          <img
            className="h-[30px] rounded-full cursor-pointer active:scale-75 transition-all"
            src={userIcon}
            alt="user-icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
