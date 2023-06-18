import axios from "axios";

const singleRequest = () => {
  let count = 0;

  return (urls) => {
    if (count !== 0) return;
    let counter = 0;
    console.log("counter ------------ ", counter++);
    count++;

    return new Promise((resolve) => {
      Promise.all(urls.map((movie) => axios.get(movie))).then((res) => {
        let movies = res.map((movie) => {
          return {
            title: movie.data.title,
            overview: movie.data.overview,
            release_date: movie.data.release_date,
            vote_average: movie.data.vote_average,
            backdrop_path: movie.data.backdrop_path,
          };
        });
        console.log("here...");
        resolve(movies);
      });
    });
  };
};

export const getOnce = singleRequest();
