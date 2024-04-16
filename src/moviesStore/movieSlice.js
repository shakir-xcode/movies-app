import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, beginSearch } from "./appActions";
import { TEN_MINUTES } from "../moviesConfig";

let timeoutID;

const slice = createSlice({
    name: 'movies',
    initialState: {
        popularList: [],
        topRatedList: [],
        upcomingList: [],
        searchList: [],
        searchString: '',
        loading: false,
        lastFetch: null,
    },
    reducers: {
        moviesRequested: (state, action) => {
            state.loading = true;
        },
        requestEnded: (state, aciton) => {
            state.loading = false;
        },
        setTimestamp: (state, action) => {
            state.lastFetch = Date.now();
        },
        popularMoviesReceived: (state, action) => {
            state.popularList.push(...action.payload);
        },
        topRatedMoviesReceived: (state, action) => {
            state.topRatedList.push(...action.payload);
        },
        upcomingMoviesReceived: (state, action) => {
            state.upcomingList.push(...action.payload);
        },
        setSearchString: (state, action) => {
            state.searchString = action.payload;
        },
        searchedMoviesReceived: (state, action) => {
            state.searchList = action.payload;
        },
        addMovie: (state, action) => {
            state.list.push(action.payload)
        },
    }
})

export const {
    moviesRequested,
    requestEnded,
    setTimestamp,
    popularMoviesReceived,
    topRatedMoviesReceived,
    upcomingMoviesReceived,
    setSearchString,
    searchedMoviesReceived,
} = slice.actions;
export default slice.reducer;


// Action Creators
export const loadMovies = () => (dispatch, getState) => {
    const { lastFetch } = getState().movies
    const timeDiff = Date.now() - lastFetch;

    // if next request is made within ten minutes
    // then action is not dispatched again 
    if (timeDiff < TEN_MINUTES) {
        console.log('cached...');
        return;
    };

    dispatch(apiCallBegan({
        onStart: moviesRequested.type,
        onEnd: requestEnded.type,
        setTimestamp: setTimestamp.type,
        onSuccess: {
            popularMoviesReceived: popularMoviesReceived.type,
            topRatedMoviesReceived: topRatedMoviesReceived.type,
            upcomingMoviesReceived: upcomingMoviesReceived.type,
        },
    }))

}

export const loadSearchedMovies = (searchQuery) => (dispatch, getState) => {
    clearTimeout(timeoutID);
    let id = setTimeout(() => {
        // console.log('here...')
        dispatch(beginSearch({
            searchQuery,
            onStart: moviesRequested.type,
            onEnd: requestEnded.type,
            onSuccess: {
                searchedMoviesReceived: searchedMoviesReceived.type,
                setSearchString: setSearchString.type,
            }
        }))
    }, 400);
    timeoutID = id;

}



// SELECTORS
// export const getMovie = (state) => state.movies.popularList[2]