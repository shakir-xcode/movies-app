const getKey = () => localStorage.length + 1;

export const storeMovie = (value = "movie") => {
  localStorage.setItem(getKey(), JSON.stringify(value));
};
export const getAllMovies = () => {
  const length = getKey();
  let movies = [];
  for (let i = 1; i < length; i++)
    movies.push(JSON.parse(localStorage.getItem(i)));

  return movies;
};
