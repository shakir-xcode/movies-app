import React from "react";
import MovieList from "./MovieList";

function UpcomingMovies({ upComing }) {
  return (
    <div>
      <MovieList movies={upComing} genre="Up Coming" />
    </div>
  );
}

export default UpcomingMovies;
