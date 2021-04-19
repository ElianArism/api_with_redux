import { Injectable } from "@angular/core"; 

import {catchError, map, mergeMap } from "rxjs/operators"; 
import { of } from "rxjs";

import { UserService } from "src/app/services/user.service";

// importaciones de ngrx 
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usersActions from "../actions";


// Los efectos son servicios en angular 

@Injectable()
export class UserEffects {
    constructor(private _actions$: Actions, private _usersServ: UserService) {}


    // formar efecto
    loadUser = createEffect(
        () => this._actions$.pipe(
            // escuchar por la accion load user
            ofType(usersActions.loadUser), 

            mergeMap(
                // llamar a la funcion que resolvera un observable para enlazarlo y retornarlo 
                ( action ) => this._usersServ.getUser( action.user_id )
                .pipe(
                    map(({data: userFromLoadUser}: any) => usersActions.loadUserSuccess({user: userFromLoadUser})),
                    catchError( err => of(usersActions.loadUsersError({payload: err})))
                )
            )
        )
    )

}
