import React from "react";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

function Favorites() {
  const favoriteMovies = useSelector((state) => state.favorites.list);

  return (
    <div>
      <h1 className="text-xl font-bold my-4 text-center">Favorite movies</h1>
      <div className="flex flex-wrap justify-center mt-12">
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })
        ) : (
          <p className="text-2xl md:text-5xl font-bold opacity-50">
            No favorites yet
          </p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
