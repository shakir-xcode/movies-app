import React from "react";
import PopularMovies from "../components/PopularMovies";
import HeroSection from "../components/HeroSection";
import TopRatedMovies from "../components/TopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";

function Home() {
  return (
    <div>
      <HeroSection />
      <PopularMovies />
      <TopRatedMovies />
      <UpcomingMovies />
    </div>
  );
}

export default Home;
