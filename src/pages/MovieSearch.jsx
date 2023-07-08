import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchedMovies } from "../moviesStore/movieSlice";

function MovieSearch() {
  const searchMovieList = useSelector((state) => state.movies.searchList);
  const savedSearchQuery = useSelector((state) => state.movies.searchString);
  const [searchString, setSearchString] = useState(savedSearchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSearchedMovies(searchString));
    console.log("here .");
  }, [searchString]);

  return (
    <div className="px-2 md:px-8 ">
      <div className=" flex justify-end px-4 mt-6">
        <SearchBox
          searchValue={searchString}
          setSearchValue={setSearchString}
        />
      </div>
      <h1 className="font-bold text-2xl text-center my-5">Results</h1>

      <div className="flex flex-wrap justify-center ">
        {searchMovieList.length > 0
          ? searchMovieList.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default MovieSearch;
