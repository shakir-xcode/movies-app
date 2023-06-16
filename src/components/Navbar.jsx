import React from "react";
import SearchBox from "./SearchBox";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div
      className="absolute z-40 w-full px-5 py-4 md:px-14
    lg:px-24  flex justify-between items-center flex-wrap"
    >
      <div className=" w-32">
        <img src={logo} alt="logo" />
      </div>

      <div>
        <SearchBox />
      </div>
    </div>
  );
}

export default Navbar;
