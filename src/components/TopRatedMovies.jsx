import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function TopRatedMovies() {
  const topRatedList = useSelector((state) => state.movies.topRatedList);

  return (
    <div>
      <MovieList movies={topRatedList} genre="Top Rated" />
    </div>
  );
}

export default TopRatedMovies;
