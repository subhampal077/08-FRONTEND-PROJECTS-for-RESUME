import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img
          className="h-8 cursor-pointer object-contain sm:h-9 md:h-10"
          src={assets.logo}
          alt="logo"
        />
      </Link>

      <div className="hidden items-center gap-4 text-sm text-gray-700 sm:flex">
        <NavLink to="/">
          <p>HOME</p>{" "}
          <hr className="mx-auto hidden h-[1.8px] w-1/2 bg-gray-700" />
        </NavLink>
        <NavLink to="/collection">
          <p>COLLECTION</p>{" "}
          <hr className="mx-auto hidden h-[1.8px] w-1/2 bg-gray-700" />
        </NavLink>
        <NavLink to="/about">
          <p>ABOUT</p>{" "}
          <hr className="mx-auto hidden h-[1.8px] w-1/2 bg-gray-700" />
        </NavLink>
        <NavLink to="/contact">
          <p>CONTACT</p>{" "}
          <hr className="mx-auto hidden h-[1.8px] w-1/2 bg-gray-700" />
        </NavLink>

        <button className="rounded-full border-[1px] border-gray-300 px-2 py-1 text-xs">
          ADMIN
        </button>
      </div>

      <div className="flex items-center gap-5">
        <Link to={"/collection"}>
          <img
            onClick={() => setShowSearch(true)}
            className="h-5 cursor-pointer object-contain"
            src={assets.search_icon}
            alt="search-icon"
          />
        </Link>
        <div className="group relative">
          <Link to="/login">
            <img
              className="h-5 cursor-pointer object-contain"
              src={assets.profile_icon}
              alt="profile"
            />
          </Link>
          <div className="dropdown-menu absolute right-[-10px] hidden pt-3 group-hover:block">
            <div className="flex w-36 flex-col gap-2 rounded bg-slate-100 px-5 py-3 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img
            className="h-5 cursor-pointer object-contain"
            src={assets.cart_icon}
            alt="cart"
          />
          <p className="absolute right-[-4px] top-3 h-4 w-4 rounded-full bg-black text-center text-[10px] text-white">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisibleMenu(true)}
          className="h-4 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* sidebar meu for mobile responsive */}
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-white transition-all ${
          visibleMenu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisibleMenu(false)}
            className="flex cursor-pointer items-center gap-4 p-3 text-gray-600"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="back-icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/"
            className="border-y-[1px] border-gray-300 px-6 py-2"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/collection"
            className="border-y-[1px] border-gray-300 px-6 py-2"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/about"
            className="border-y-[1px] border-gray-300 px-6 py-2"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/contact"
            className="border-y-[1px] border-gray-300 px-6 py-2"
          >
            CONTACT
          </NavLink>
          <button
            onClick={() => setVisibleMenu(false)}
            className="border-y-[1px] border-gray-300 px-6 py-2 text-left"
          >
            ADMIN PANEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
