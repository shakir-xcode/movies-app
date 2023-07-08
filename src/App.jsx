import React, { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import MovieInfo from "./pages/MovieInfo";
import MovieSearch from "./pages/MovieSearch";
import { loadMovies } from "./moviesStore/movieSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <BrowserRouter>
      <div className="relative max-w-[1440px] mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/info" element={<MovieInfo />} />
          <Route path="/search" element={<MovieSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
