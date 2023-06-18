import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { FavIDContext } from "../App";

function MovieList({ movies, genre }) {
  const favoriteIds = useContext(FavIDContext);
  return (
    <div className="mt-2">
      <h1 className="text-lg font-medium mx-2">{genre}</h1>
      <div
        className=" overflow-x-scroll overflow-y-visible whitespace-nowrap 
    scrollbar-hide scroll-smooth py-1 "
      >
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            liked={favoriteIds.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
