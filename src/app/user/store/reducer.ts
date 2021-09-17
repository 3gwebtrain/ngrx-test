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
    users: [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
    ]
}


const reducer = createReducer(initialState,
    on(userActions.actionGetUsers, ((state, action) => ({ ...state }))),
    on(userActions.actionGetUsersSuccess, ((state, action: any) => ({ users: action.users })))
)

export function userReducer(state: PropUsers = initialState, action: Action) {
    return reducer(state, action);
}