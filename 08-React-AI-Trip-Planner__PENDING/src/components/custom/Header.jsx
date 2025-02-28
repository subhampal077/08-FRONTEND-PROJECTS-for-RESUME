import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 bg-white w-full shadow-md ">
      <div className="max-w-7xl mx-auto flex items-center  justify-between py-3 px-5">
        <div>
          <Link to={"/"}>
            <img src="./logo.svg" alt="logo-image" />
          </Link>
        </div>
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
