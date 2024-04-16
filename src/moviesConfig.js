
// For cached results
export const TEN_MINUTES = 600000;         //milliseconds in ten minutes


// local storage keys
export const SEARCH_KEY = "MOVIE_APP_SEARCH_STRING";
export const MOVIE_KEY = "MOVIE_APP_MOVIE_KEY";

// const request = {
//     requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=1',
//     requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=1',
//     requestTrending: 'https://api.themoviedb.org/3/movie/popular?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=2',
//     requestHorror: 'https://api.themoviedb.org/3/search/movie?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&query=horror&page=1&include_adult=false',
//     requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=1',
//     movieInfo: 'https://api.themoviedb.org/3/movie/343611?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US'
// }

// const baseUrl = 'https://movies-hub-backend-oz0n838tt-shaker-s-projects.vercel.app';
const baseUrl = 'https://movieshub-backend.onrender.com';

const request = {
    requestPopular: baseUrl + "/api/movies/popular",
    requestTopRated: baseUrl + "/api/movies/topRated",
    requestTrending: baseUrl + "/api/movies/trending",
    requestHorror: baseUrl + "/api/movies/horror",
    requestUpcoming: baseUrl + "/api/movies/upcoming",
    requestSearch: baseUrl + "/api/movies/search",
}

// export const getSearchUrl = title => `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=1982aef0e1f11c0677b20dc7b708bb87`;

export default request;
