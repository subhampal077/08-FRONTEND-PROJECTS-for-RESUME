import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around px-4 py-3 bg-cyan-400">
      <p className="font-semibold text-xl cursor-pointer">TaskTree</p>

      <p className="cursor-pointer hover:font-semibold transition-all">Home</p>
    </nav>
  );
};

export default Navbar;
