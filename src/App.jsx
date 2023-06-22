import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import MovieInfo from "./pages/MovieInfo";
import MovieSearch from "./pages/MovieSearch";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { MOVIE_KEY } from "./requests";

export const FavContext = React.createContext();
export const FavIDContext = React.createContext();

function App() {
  const [favoriteMovies, setFavoriteMovies] = useLocalStorage(MOVIE_KEY, []);
  const favoriteIds = favoriteMovies.map((movie) => movie.id);
  const [searchedMovies, setSearchedMovies] = useState([]);

  //enhance
  const handleFavorites = (movie) => {
    const newMovie = {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
    };

    // check if the movie is already favorite, then remove it, otherwise add
    if (favoriteMovies.some((m) => m.id === newMovie.id)) {
      const newFavorites = favoriteMovies.filter((fm) => fm.id !== newMovie.id);
      setFavoriteMovies(newFavorites);
    } else {
      setFavoriteMovies([...favoriteMovies, newMovie]);
    }
  };

  return (
    <BrowserRouter>
      <FavContext.Provider value={handleFavorites}>
        <FavIDContext.Provider value={favoriteIds}>
          <div className="relative max-w-[1440px] mx-auto ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/favorite"
                element={<Favorites favoriteMovies={favoriteMovies} />}
              />
              <Route path="/info" element={<MovieInfo />} />
              <Route
                path="/search"
                element={
                  <MovieSearch
                    searchMovieList={searchedMovies}
                    updateSearchList={setSearchedMovies}
                  />
                }
              />
            </Routes>
          </div>
        </FavIDContext.Provider>
      </FavContext.Provider>
    </BrowserRouter>
  );
}

export default App;
