import { createAction, props } from "@ngrx/store";
import { PropUsers } from "./reducer";

export const userActions = {
    GET_USERS: '[users] Get Users',
    GET_USERS_SUCESS: '[users] Get Users Success',
    GET_USERS_FAILURE: '[users] Get Users Failure',
}

export const actionGetUsers = createAction(userActions.GET_USERS);
export const actionGetUsersSuccess = createAction(userActions.GET_USERS_SUCESS, props<{ users: PropUsers[] }>());
export const actionGetUsersFailure = createAction(userActions.GET_USERS_FAILURE, props<{ error: string }>());