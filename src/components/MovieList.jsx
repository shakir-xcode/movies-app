import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, genre }) {
  return (
    <div className="mt-2">
      <h1 className="text-lg font-medium mx-2">{genre}</h1>
      <div
        className=" overflow-x-scroll overflow-y-visible whitespace-nowrap 
    scrollbar-hide scroll-smooth py-1 "
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
