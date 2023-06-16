import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { useLocation } from "react-router-dom";

function MovieInfo() {
  const location = useLocation();
  const movie = location.state;
  return (
    <div className="">
      <div className=" relative h-[550px]">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 max-w-3xl mx-auto my-4">
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-center">
          {movie?.title}
        </h1>
        <p className="font-bold text-xl mt-4">Overview</p>
        <p className="mt-1">{movie?.overview}</p>
        <div className="mt-4 flex flex-wrap gap-10 items-center justify-between">
          <p className=" ">
            <span className="font-bold">Release Date: </span>
            {movie?.release_date}
          </p>
          <p className=" flex gap-3  ">
            <FaThumbsUp size={24} />{" "}
            <span className=" font-bold mt-1">
              {movie?.vote_average} Rating
            </span>
          </p>
          <div className="flex gap-2">
            <button>
              <MdFavoriteBorder size={20} />
            </button>
            <p className="font-bold">Add to Favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
