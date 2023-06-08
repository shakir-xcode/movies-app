import React from "react";
import MovieList from "./MovieList";

function AllMovies({ movies }) {
  return (
    <div>
      <MovieList movies={movies} genre="All" />
    </div>
  );
}

export default AllMovies;
