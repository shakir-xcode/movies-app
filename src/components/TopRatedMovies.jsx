import React from "react";
import MovieList from "./MovieList";

function TopRatedMovies({ topRated }) {
  return (
    <div>
      <MovieList movies={topRated} genre="Top Rated" />
    </div>
  );
}

export default TopRatedMovies;
