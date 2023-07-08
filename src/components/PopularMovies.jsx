import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function PopularMovies() {
  const popularList = useSelector((state) => state.movies.popularList);

  return (
    <div className="mt-8">
      <MovieList movies={popularList} genre="Popular" />
    </div>
  );
}

export default PopularMovies;
