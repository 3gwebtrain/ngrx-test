import { combineReducers } from "@ngrx/store";
import { userReducer } from "./../user/store/reducer";
import { PropUsers, PropUser } from "./../user/store/reducer";

export interface AppState {
    users: PropUsers[],
    profile: PropUser,
    error: string
}

export const AppReducer = combineReducers({
    reducerUser: userReducer
});