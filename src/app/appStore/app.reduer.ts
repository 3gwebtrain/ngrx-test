import { combineReducers } from "@ngrx/store";
import { userReducer } from "./../user/store/reducer";
import { PropUsers } from "./../user/store/reducer";

export interface AppState {
    users: PropUsers[]
}

export const AppReducer = combineReducers({
    reducerUser: userReducer
});