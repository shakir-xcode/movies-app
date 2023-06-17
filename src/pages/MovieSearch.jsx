import React, { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function MovieSearch() {
  const [searchedMovies, setSearchedMovies] = useState("");
  const [searchString, setSearchString] = useState("");

  const sortMovies = (movies) => {
    let sortedMovies = [...movies];
    return sortedMovies.sort((movie1, movie2) =>
      movie1.release_date > movie2.release_date ? -1 : 1
    );
  };

  const findMoive = (title) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=1982aef0e1f11c0677b20dc7b708bb87`;

    axios
      .get(searchUrl)
      .then((response) => setSearchedMovies(sortMovies(response.data.results)));
  };
  useEffect(() => {
    findMoive(searchString);
  }, [searchString]);

  // console.log(searchedMovies);
  return (
    <div className="px-2 md:px-8 ">
      <div className=" flex justify-end px-4 mt-6">
        <SearchBox
          searchValue={searchString}
          setSearchValue={setSearchString}
        />
      </div>
      <h1 className="font-bold text-2xl text-center my-5">Results</h1>

      <div className="flex flex-wrap justify-center">
        {searchedMovies.length > 0
          ? searchedMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} liked={true} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default MovieSearch;
