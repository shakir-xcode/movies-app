import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';
import reducer from "./entities";
import logger from "./middleware/logger";
import api from "./middleware/api";
import shortenFavorite from "./middleware/shortenFavorite";
import searchMoviesApi from "./middleware/searchMoviesApi";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: dm => dm({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger, api, shortenFavorite, searchMoviesApi),
})

export const persistor = persistStore(store)