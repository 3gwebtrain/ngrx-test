import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from "./../services/user.service";
import { userActions, actionGetUsersSuccess, actionGetUsersFailure } from "./actions";
import { PropUsers } from "./reducer"

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) { }

    getUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.GET_USERS),
            mergeMap(() => this.userService.getUsers().pipe(
                map((users: any) => actionGetUsersSuccess({ users })),
                catchError((error) => of(actionGetUsersFailure({ error })))
            ))
        )
    )

}