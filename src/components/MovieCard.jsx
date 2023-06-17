import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Poster from "../assets/4.jpg";

function MovieCard({ movie, liked = false, likeIt }) {
  // const likeIt = () => {};

  return (
    <Link to="/info" state={movie}>
      <div
        className="relative w-[160px] h-full sm:w-[200px] md:w-[240px] lg:w-[280px] 
    inline-block mx-[0.15rem] cursor-pointer  "
      >
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute bg-black/80 top-0 left-0 bottom-0 right-0 opacity-0 hover:opacity-100 transition">
          <p className="flex flex-col gap-3 justify-center items-center h-full  ">
            {movie.title}
          </p>
          <p
            onClick={() => likeIt(movie?.id, movie?.title)}
            className="absolute top-4 left-4"
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
