import React from "react";
import bgImage from "../assets/4.jpg";
import { BsFillPlayFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

function HeroSection({ movieBg }) {
  return (
    <div className="relative h-[100svh] ">
      <div className="absolute top-0 left-0 bottom-0 right-0  ">
        <img
          src={bgImage}
          alt="movie-background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" absolute top-1/3 mx-4 md:mx-12 max-w-3xl mt-10">
        <h1 className="text-3xl md:text-5xl font-bold">Movie Name</h1>
        <p className="">
          this is some movie description. this is some movie description. this
          is some movie description. this is some movie description. this is
          some movie description. this is some movie description.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="px-4 py-[0.4rem] bg-accent rounded flex justify-center items-center gap-1 font-bold hover:bg-btn.accent-hover">
            <BsFillPlayFill size={24} /> Play
          </button>
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
