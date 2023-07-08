import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function UpcomingMovies() {
  const upComingList = useSelector((state) => state.movies.upcomingList);
  return (
    <div>
      <MovieList movies={upComingList} genre="Up Coming" />
    </div>
  );
}

export default UpcomingMovies;
