import { createSelector, createFeatureSelector } from '@ngrx/store';
const usersSelector = createFeatureSelector<any>("store");

export const selectUsers = createSelector(usersSelector, (state) => {
    return state.reducerUser.users;
})
export const selectProfile = createSelector(usersSelector, (state) => {
    return state.reducerUser.profile;
})
