import React from "react";
import { Link } from "react-router-dom";
import { CgInfo } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";
import Navbar from "./Navbar";

function HeroSection({ movie }) {
  const truncStr = (str = "overview", len = 150) => {
    if (str.length <= len) return str;
    return str.slice(0, len) + "...";
  };

  return (
    <div className=" relative h-[550px]">
      <Navbar />
      <div className="absolute w-full h-full bg-gradient-to-b from-black/90 z-10"></div>
      <div className="absolute w-full h-full  ">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" absolute top-1/3 mx-4 md:mx-12 max-w-3xl mt-4 z-20">
        <h1 className="text-3xl md:text-5xl font-bold">
          {movie?.title || "Loading..."}
        </h1>
        <p className=" mt-2">{truncStr(movie?.overview)}</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link to="info">
            <button className="px-4 py-[0.4rem] bg-accent rounded flex justify-center items-center gap-1 font-bold hover:bg-btn.accent-hover">
              <CgInfo size={24} /> Info
            </button>
          </Link>
          <button className="px-4 py-1 bg-white text-accent rounded font-bold flex justify-center items-center gap-2 hover:bg-slate-100/80">
            <MdFavoriteBorder size={20} />
            Favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
