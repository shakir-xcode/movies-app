import React from "react";
import MovieList from "../components/MovieList";
import MovieCard from "../components/MovieCard";

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
      <h1 className="text-xl font-bold my-4 text-center">Favorite movies</h1>
      {/* <MovieList movies={movies} genre="Favorites" /> */}
      <div className="flex flex-wrap">
        {movies.length > 0
          ? movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} liked={true} />
            ))
          : "No favorite movies"}
      </div>
    </div>
  );
}

export default Favorites;
