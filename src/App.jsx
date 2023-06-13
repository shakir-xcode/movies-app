import React from "react";
import { movies } from "./movies";
import PopularMovies from "./components/PopularMovies";
import Favorites from "./components/Favorites";
import HeroSection from "./components/HeroSection";
import TopRatedMovies from "./components/TopRatedMovies";
import UpcomingMovies from "./components/UpcomingMovies";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <HeroSection />
      <PopularMovies popular={movies} />
      <TopRatedMovies topRated={movies} />
      <UpcomingMovies upComing={movies} />
      <Favorites />
    </div>
  );
}

export default App;
