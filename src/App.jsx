import React from "react";
import { movies } from "./movies";
import AllMovies from "./components/AllMovies";
import Favorites from "./components/Favorites";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <HeroSection />
      <AllMovies movies={movies} />
      <Favorites />
    </div>
  );
}

export default App;
