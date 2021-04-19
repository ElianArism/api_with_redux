import { Injectable } from "@angular/core";

import { catchError, map, mergeMap, tap } from "rxjs/operators";

// importaciones de ngrx 
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usersActions from "../actions";
import { UserService } from "src/app/services/user.service";
import { of } from "rxjs";

//  los efectos son servicios de angular 

@Injectable()
export class UsersEffects {
    constructor(private _actions$: Actions, private _usersServ: UserService) {}
    

    //  formar efecto 
    cargarUsuarios$ = createEffect(

        // la primera parte crea un observable que se encuentra escuchando por una accion en especifico 
        () => this._actions$.pipe( // toma como parametro una funcion que retorna un observable 
            ofType(usersActions.loadUsers),  // escuchar una accion especifica

            // la segunda enlaza el observable que se desea ejecutar cuando se escuche esa accion
            mergeMap( // unir dos observables en uno 
                () =>  this._usersServ.getUsers() // retornar observable que desea ejecutar 
            
                // la tercera dispara la accion correspondiente
                .pipe(
                    map(usersFromGetUsers => usersActions.loadUsersSuccess({users: usersFromGetUsers})),
                    catchError( err => 
                        // of crea un observable retornable, ya que catchError no regresa ninguno
                        of( 
                            usersActions.loadUsersError( {payload: err} )
                        )
                    )
                )
            
            )
        )

    );

}