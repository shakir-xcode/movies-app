import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import useLocalStorage from "../hooks/useLocalStorage";
import { storeMovie, getAllMovies } from "../localStorage/localStorage";
import axios from "axios";

// localStorage.clear();
// storeMovie({ id: 385687, title: "Fast X" });
// storeMovie({ id: 603692, title: "Fast 2" });
// storeMovie({ id: 1010581, title: "movie 3" });
// storeMovie({ id: 502356, title: "movie 4" });

function Favorites() {
  // const movies = [
  //   {
  //     id: 1,
  //     title: "Movie",
  //     description: "this is some movies description.",
  //   },
  //   {
  //     id: 2,
  //     title: "Movie",
  //     description: "this is some movies description.",
  //   },
  //   {
  //     id: 3,
  //     title: "Movie",
  //     description: "this is some movies description.",
  //   },
  // ];

  const [storedMovies, setStoredMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = getAllMovies();
    setStoredMovies(savedMovies);

    const favoriteUrls = savedMovies.map(
      (movie) =>
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US`
    );
    const singleRequest = () => {
      let count = 0;

      return (urls) => {
        if (count !== 0) return;
        let counter = 0;
        console.log("counter ------------ ", counter++);
        count++;
        Promise.all(urls.map((movie) => axios.get(movie))).then((res) => {
          let movies = res.map((movie) => {
            return {
              title: movie.data.title,
              overview: movie.data.overview,
              release_date: movie.data.release_date,
              vote_average: movie.data.vote_average,
              backdrop_path: movie.data.backdrop_path,
            };
          });

          setMovies(movies);
        });
      };
    };

    const getOnce = singleRequest();

    getOnce(favoriteUrls);
  }, []);

  const handleLike = (id, title) => {
    storeMovie({ id, title });
  };

  return (
    <div>
      <h1 className="text-xl font-bold my-4 text-center">Favorite movies</h1>
      {/* <MovieList movies={movies} genre="Favorites" /> */}
      <div className="flex flex-wrap">
        {movies.length > 0
          ? movies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
                liked={true}
                likeIt={handleLike}
              />
            ))
          : "No favorite movies"}
      </div>
    </div>
  );
}

export default Favorites;
