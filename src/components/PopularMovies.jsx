import React from "react";
import MovieList from "./MovieList";

function PopularMovies({ popular }) {
  return (
    <div className="mt-8">
      <MovieList movies={popular} genre="Popular" />
    </div>
  );
}

export default PopularMovies;
