import { beginSearch } from "../appActions"
import request from "../../moviesConfig";
import axios from "axios";

const searchMoviesApi = ({ dispatch }) => next => action => {
    if (action.type !== beginSearch.type) return next(action)

    next(action);
    const { onStart, onEnd, onSuccess, searchQuery } = action.payload;

    if (onStart)
        dispatch({ type: onStart });

	console.log('searched : ',searchQuery)
	if (!searchQuery) return;
    axios
        .get(request.requestSearch, {params: { title: searchQuery }})
        .then(response => {

	console.log(response)
            dispatch({ type: onSuccess.setSearchString, payload: searchQuery });
            dispatch({ type: onSuccess.searchedMoviesReceived, payload: sortMovies(response.data.results) });

            if (onEnd)
                dispatch({ type: onEnd })
        })
        .catch(error => {
            console.log(error.message);
            dispatch({ type: 'Error', payload: error.message })

            if (onEnd)
                dispatch({ type: onEnd })
        })

}


const sortMovies = (movies) => {
    let sortedMovies = [...movies];
    return sortedMovies.sort((movie1, movie2) =>
        movie1.release_date > movie2.release_date ? -1 : 1
    );
};

export default searchMoviesApi;