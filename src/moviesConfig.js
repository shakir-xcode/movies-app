
// For cached results
export const TEN_MINUTES = 600000;         //milliseconds in ten minutes


// local storage keys
export const SEARCH_KEY = "MOVIE_APP_SEARCH_STRING";
export const MOVIE_KEY = "MOVIE_APP_MOVIE_KEY";



const baseUrl = 'https://movieshub-backend.onrender.com';
//const baseUrl = "https://movies-hub-backend.vercel.app/";

//const baseUrl = 'http://localhost:8000'
 
const request = {
    requestPopular: baseUrl + "/api/movies/popular",
    requestTopRated: baseUrl + "/api/movies/topRated",
    requestTrending: baseUrl + "/api/movies/trending",
    requestHorror: baseUrl + "/api/movies/horror",
    requestUpcoming: baseUrl + "/api/movies/upcoming",
    requestSearch: baseUrl + "/api/movies/search",
}


export default request;
