import React from "react";
import MovieList from "./MovieList";

function PopularMovies({ popular }) {
  return (
    <div>
      <MovieList movies={popular} genre="Popular" />
    </div>
  );
}

export default PopularMovies;
