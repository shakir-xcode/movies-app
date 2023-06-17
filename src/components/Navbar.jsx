import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="search">
          <button className="px-4 py-1 bg-accent text-md text-white font-bold  rounded-sm hover:bg-btn.accent-hover">
            Search Movies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
