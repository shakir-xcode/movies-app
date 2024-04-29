import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../moviesStore/favoriteSlice";

function MovieCard({ movie }) {
  const favoriteMovies = useSelector((state) => state.favorites.idList);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleFavoriteClick = (movie) => {
    favoriteMovies.includes(movie?.id)
      ? dispatch(removeFavorite(movie?.id))
      : dispatch(addFavorite(movie));
  };

  const handleClick = (e) => {
    e.target.localName === "p" //if card overlay is clicked
      ? navigate("/info", { state: { movie } })
      : handleFavoriteClick(movie); //if fav icon is clicked
  };

  const imageRes = movie?.backdrop_path
    ? movie?.backdrop_path
    : movie?.poster_path;
  return (
    <div
      className="relative w-[160px] h-full sm:w-[200px] md:w-[240px] lg:w-[280px] 
    inline-block mx-[0.1em] my-[0.1em] md:mx-[0.25em] md:my-[0.25em] cursor-pointer  "
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${imageRes}`}
        alt={movie?.title}
        loading="lazy"
      />

      <div
        onClick={handleClick}
        className=" absolute bg-black/80 top-0 left-0 bottom-0 right-0 opacity-0 hover:opacity-100 transition"
      >
        <p className="flex flex-col gap-3 justify-center items-center h-full overflow-hidden text-[0.7rem] md:text-[0.9rem] font-bold">
          {movie?.title}
        </p>
        <p className="absolute top-4 left-4 z-50">
          {favoriteMovies.includes(movie.id) ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
