import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import * as userActions from "./actions";

export interface PropUser {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PropUsers {
    users: PropUser[]
}

export interface PropsInitial {
    users: PropUsers[],
    profile: PropUser,
    error: string
}

export const initialState: PropsInitial = {
    users: [],
    profile: { userId: 0, id: 0, title: "yet to set", body: "body should set" },
    error: "no error"
}


const reducer = createReducer(initialState,
    on(userActions.actionGetUsers, ((state, action) => ({ ...state }))),
    on(userActions.actionGetUsersSuccess, ((state, action) => ({ ...state, users: action.users }))),

    on(userActions.actionGetProfile, ((state, action) => ({ ...state, profile: action.payload }))),
    on(userActions.actionGetProfileSuccess, ((state, action) => ({ ...state, profile: action.user }))),
    on(userActions.actionGetProfileFailure, ((state, action) => ({ ...state, error: action.error }))),
)

export function userReducer(state: PropsInitial = initialState, action: Action) {
    return reducer(state, action);
}