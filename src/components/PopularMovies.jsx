import React from "react";
import MovieList from "./MovieList";

function PopularMovies({ popular, favoriteIds }) {
  return (
    <div>
      <MovieList movies={popular} genre="Popular" />
    </div>
  );
}

export default PopularMovies;
