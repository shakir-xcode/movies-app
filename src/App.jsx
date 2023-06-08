import React from "react";
import { movies } from "./movies";
import AllMovies from "./components/AllMovies";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <AllMovies movies={movies} />
      <Favorites />
    </div>
  );
}

export default App;
