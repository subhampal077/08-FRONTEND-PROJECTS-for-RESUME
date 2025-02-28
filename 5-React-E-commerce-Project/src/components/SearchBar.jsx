import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const location = useLocation();
  //   console.log(location);

  return showSearch && location.pathname === "/collection" ? (
    <div className="border-t bg-gray-50 text-center">
      <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent text-sm outline-none"
          type="text"
          placeholder="Search"
        />
        <img className="h-4" src={assets.search_icon} alt="search_icon" />
      </div>
      <img
        onClick={() => {
          setShowSearch(false);
          setSearch("");
        }}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="cross_icon"
      />
    </div>
  ) : null;
};

export default SearchBar;
