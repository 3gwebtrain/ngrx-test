import { createAction, props } from "@ngrx/store";
import { PropUsers, PropUser } from "./reducer";

export const userActions = {
    GET_USERS: '[users] Get Users',
    GET_USERS_SUCESS: '[users] Get Users Success',
    GET_USERS_FAILURE: '[users] Get Users Failure',

    GET_PROFILE: '[users] Get Users',
    GET_PROFILE_SUCESS: '[users] Get Users Success',
    GET_PROFLE_FAILURE: '[users] Get Users Failure',
}

export const actionGetUsers = createAction(userActions.GET_USERS);
export const actionGetUsersSuccess = createAction(userActions.GET_USERS_SUCESS, props<{ users: PropUsers[] }>());
export const actionGetUsersFailure = createAction(userActions.GET_USERS_FAILURE, props<{ error: string }>());

export const actionGetProfile = createAction(userActions.GET_PROFILE, () => ({
    payload: {
        "userId": 1,
        "id": 1,
        "title": "Sample title",
        "body": "Sample body starts quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
}));
export const actionGetProfileSuccess = createAction(userActions.GET_PROFILE_SUCESS, props<{ user: PropUser }>());
export const actionGetProfileFailure = createAction(userActions.GET_PROFLE_FAILURE, props<{ error: string }>());