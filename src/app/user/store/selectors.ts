import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from "./../../appStore/app.reduer";

const usersSelector = createFeatureSelector<AppState>("store");

export const selectUsers = createSelector(usersSelector, (state) => {
    console.log('selector', state);
    return state.users;
})
