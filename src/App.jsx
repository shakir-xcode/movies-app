import React, { useState, useEffect } from "react";
import PopularMovies from "./components/PopularMovies";
import Favorites from "./components/Favorites";
import HeroSection from "./components/HeroSection";
import TopRatedMovies from "./components/TopRatedMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import Navbar from "./components/Navbar";
import request from "./requests";
import axios from "axios";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const popularApi = request.requestPopular;
  const topRatedApi = request.requestTopRated;
  const upcomingApi = request.requestUpcoming;

  const heroSectionMovie =
    popularMovies[Math.floor(Math.random() * popularMovies.length)];

  function getPopularMovies() {
    return axios.get(popularApi);
  }

  function getTopRatedMovies() {
    return axios.get(topRatedApi);
  }

  function getUpcomingMovies() {
    return axios.get(upcomingApi);
  }

  // const getAllMovies = async () => {
  //   await getPopularMovies().then((res) => setMovis(res.data.results));
  //   await getTopRatedMovies()
  //     .then((res) => console.log("topRated = ", res.data.results))
  //     .catch((err) => console.log("Error = ", err));

  //   await getUpcomingMovies()
  //     .then((res) => console.log("upComing = ", res.data.results))
  //     .catch((err) => console.log("Error + ", err));
  // };
  useEffect(() => {
    // axios.get(popularMovies).then((res) => setMovis(res.data.results));
    Promise.all([getPopularMovies(), getTopRatedMovies(), getUpcomingMovies()])
      .then((allMovies) => {
        setPopularMovies(allMovies[0].data.results);
        setTopRatedMovies(allMovies[1].data.results);
        setUpcomingMovies(allMovies[2].data.results);
      })
      .catch((err) => console.log("Error = ", err));
  }, []);

  return (
    <div className=" max-w-[1440px] mx-auto ">
      <Navbar />
      <HeroSection movie={heroSectionMovie} />
      <PopularMovies popular={popularMovies} />
      <TopRatedMovies topRated={topRatedMovies} />
      <UpcomingMovies upComing={upcomingMovies} />
      <Favorites />
    </div>
  );
}

export default App;
