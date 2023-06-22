import React, { useState, useEffect, useContext } from "react";
import PopularMovies from "../components/PopularMovies";
import HeroSection from "../components/HeroSection";
import TopRatedMovies from "../components/TopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import request from "../requests";
import axios from "axios";
import { FavIDContext } from "../App";

function Home() {
  const favoriteMovies = useContext(FavIDContext);

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const popularApi = request.requestPopular;
  const topRatedApi = request.requestTopRated;
  const upcomingApi = request.requestUpcoming;

  const heroSectionMovie =
    popularMovies[Math.floor(Math.random() * popularMovies.length)];

  const isFavorite = favoriteMovies.includes(heroSectionMovie?.id || -1);

  function getPopularMovies() {
    return axios.get(popularApi);
  }

  function getTopRatedMovies() {
    return axios.get(topRatedApi);
  }

  function getUpcomingMovies() {
    return axios.get(upcomingApi);
  }

  useEffect(() => {
    Promise.all([getPopularMovies(), getTopRatedMovies(), getUpcomingMovies()])
      .then((allMovies) => {
        setPopularMovies(allMovies[0].data.results);
        setTopRatedMovies(allMovies[1].data.results);
        setUpcomingMovies(allMovies[2].data.results);
      })
      .catch((err) => console.log("Error = ", err));
  }, []);

  return (
    <div className="">
      <HeroSection movie={heroSectionMovie} isFavorite={isFavorite} />
      <PopularMovies popular={popularMovies} />
      <TopRatedMovies topRated={topRatedMovies} />
      <UpcomingMovies upComing={upcomingMovies} />
    </div>
  );
}

export default Home;
