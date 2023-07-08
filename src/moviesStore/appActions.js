import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction('api/apiCallBegan');
export const apiCallSuccess = createAction('api/apiCallSuccess');
export const apiCallFailed = createAction('api/apiCallFailed');
export const beginSearch = createAction('api/beginSearch');


export const beginFavortie = createAction('favorite/beginFavorite');
