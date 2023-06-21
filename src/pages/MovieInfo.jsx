import React from "react";
import { useContext } from "react";
import { FaHeart, FaRegHeart, FaThumbsUp } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { FavContext, FavIDContext } from "../App";

function MovieInfo() {
  const location = useLocation();
  const handleFavortieClick = useContext(FavContext);
  const favoriteIds = useContext(FavIDContext);

  const movie = location.state.movie;
  const isFavorite = favoriteIds.includes(movie.id);

  return (
    <div className="">
      <div className="relative h-[100svh]">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-black/60"></div>
        <div className=" absolute top-40 px-3 md:px-8 max-w-3xl my-4">
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            {movie?.title}
          </h1>
          <p className="font-bold text-xl mt-4">Overview</p>
          <p className="mt-1">{movie?.overview}</p>
          <div className="mt-4 flex flex-col flex-wrap gap-3">
            <p className=" ">
              <span className="font-bold">Release Date: </span>
              {movie?.release_date}
            </p>
            <p className=" flex gap-3  ">
              <span className=" font-bold mt-1">
                Rating {movie?.vote_average}
              </span>
              <FaThumbsUp size={24} />
            </p>
            <div className="flex gap-2">
              <button onClick={() => handleFavortieClick(movie)}>
                {isFavorite ? <FaHeart /> : <FaRegHeart />}
              </button>

              {isFavorite ? (
                <p className="font-bold">Remove Favorite</p>
              ) : (
                <p className="font-bold">Add to Favorites</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;