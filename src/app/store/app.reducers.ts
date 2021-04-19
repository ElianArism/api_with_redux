import { ActionReducerMap } from '@ngrx/store';

// mis reducers
import * as reducers from './reducers';


export interface AppState {
   users: reducers.UsersState, 
   user: reducers.UserState
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usersReducer,
    user: reducers.userReducer
}