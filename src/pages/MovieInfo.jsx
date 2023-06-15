import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import imag from "../assets/4.jpg";

function MovieInfo(props) {
  // const { title, overview, bgImage, release_date, vote_average } = props.movie;
  return (
    <div className="">
      <div className=" relative h-[550px]">
        <img src={imag} alt="imge" className="w-full h-full object-cover" />
      </div>
      <div className="p-3 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-center">
          movie title
        </h1>
        <p className="font-bold text-xl mt-4">Overview</p>
        <p className="mt-1">
          France is in turmoil and a new, naive King finds himself manipulated
          by the evil Cardinal Richelieu. With a corrupt commander of the royal
          guard by his side the Cardinal employs the expertise of the devious
          and wicked Milady de Winter in a plot to bring down the monarchy and
          drag the country into war. As France burns the Cardinal will take
          control. All that stands between them and victory are the remnants of
          an elite group who wore loyalty to crown and country. Above all else
          The Musketeers will stand against the odds to foil this deadly plot.
        </p>
        <div className="mt-4 flex flex-wrap gap-10 items-center justify-between">
          <p className=" ">
            <span className="font-bold">Release Date:</span> 10-12-2023
          </p>
          <p className=" flex gap-3  ">
            <FaThumbsUp size={24} />{" "}
            <span className=" font-bold mt-1">5.3 Rating</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
