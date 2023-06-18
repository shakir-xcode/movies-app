import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Favorites({ favoriteMovies, handleFavoriteClick }) {
  const [storedMovies, setStoredMovies] = useState(favoriteMovies);

  return (
    <div>
      <h1 className="text-xl font-bold my-4 text-center">Favorite movies</h1>
      <div className="flex flex-wrap ">
        {favoriteMovies.length > 0
          ? favoriteMovies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  liked={true}
                  likeIt={handleFavoriteClick}
                />
              );
            })
          : "No favorite movies"}
      </div>
    </div>
  );
}

export default Favorites;
