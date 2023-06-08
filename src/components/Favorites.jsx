import React from "react";
import MovieList from "./MovieList";

function Favorites() {
  const movies = [
    {
      id: 1,
      title: "Movie",
      description: "this is some movies description.",
    },
    {
      id: 2,
      title: "Movie",
      description: "this is some movies description.",
    },
    {
      id: 3,
      title: "Movie",
      description: "this is some movies description.",
    },
  ];

  return (
    <div>
      <MovieList movies={movies} genre="Favorits" />
    </div>
  );
}

export default Favorites;
