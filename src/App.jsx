import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="relative max-w-[1440px] mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/info" element={<MovieInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
