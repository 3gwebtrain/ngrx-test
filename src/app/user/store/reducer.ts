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

export const initialState: PropUsers = {
    users: []
}


const reducer = createReducer(initialState,
    on(userActions.actionGetUsers, ((state, action) => ({ ...state }))),
    on(userActions.actionGetUsersSuccess, ((state, action: any) => ({ users: action.users })))
)

export function userReducer(state: PropUsers = initialState, action: Action) {
    return reducer(state, action);
}