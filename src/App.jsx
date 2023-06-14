import React from "react";
import { movies } from "./movies";
import PopularMovies from "./components/PopularMovies";
import Favorites from "./components/Favorites";
import HeroSection from "./components/HeroSection";
import TopRatedMovies from "./components/TopRatedMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" max-w-[1440px] mx-auto ">
      <Navbar />
      <HeroSection />
      <PopularMovies popular={movies} />
      <TopRatedMovies topRated={movies} />
      <UpcomingMovies upComing={movies} />
      <Favorites />
    </div>
  );
}

export default App;
