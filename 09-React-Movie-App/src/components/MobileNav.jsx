import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { NavLink } from "react-router";

const MobileNav = () => {
  return (
    <div className="text-xs text-neutral-400 fixed bottom-0 left-0 w-full flex items-center justify-around md:hidden bg-neutral-950 py-1.5 z-10">
      <NavLink
        className={({ isActive }) =>
          `hover:text-neutral-100 flex flex-col items-center gap-0.5 ${
            isActive && "text-neutral-100"
          }`
        }
        to={"/"}
      >
        <MdHomeFilled className="text-xl" />
        <p>Home</p>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-neutral-100 flex flex-col items-center gap-0.5 ${
            isActive && "text-neutral-100"
          }`
        }
        to={"tv"}
      >
        <PiTelevisionFill className="text-xl" />
        <p>TV Shows</p>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-neutral-100 flex flex-col items-center gap-0.5 ${
            isActive && "text-neutral-100"
          }`
        }
        to={"movie"}
      >
        <BiSolidMoviePlay className="text-xl" />
        <p>Movies</p>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-neutral-100 flex flex-col items-center gap-0.5 ${
            isActive && "text-neutral-100"
          }`
        }
        to={"search"}
      >
        <IoSearchOutline className="text-xl" />
        <p>Search</p>
      </NavLink>
    </div>
  );
};

export default MobileNav;
