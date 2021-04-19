import { createReducer, on } from '@ngrx/store';
import { loadUser, LoadUserError, loadUserSuccess } from '../actions';

import { User } from 'src/app/models/user.model';

export interface UserState {
    id: string;
    user: User | null;
    loaded: boolean;
    loading: boolean; 
    error: any;
}

export const userInitialState: UserState = {
    id: '',
    user:  {id: 'aaa', first_name: 'Juan', last_name: 'pablo', avatar: 'asd', },
    loaded: false,
    loading: false,
    error: null
}

export const _userReducer = createReducer(userInitialState, 
  
    on(loadUser, (state, {user_id}) => ({...state, loading: true, id: user_id})),
   
    on(LoadUserError, (state, {error}) => ({
        ...state, 
        loading: false, 
        loaded: false,
        error: {...error}
    })), 

    on(loadUserSuccess, (state, {user}) => ({
        ...state, 
        user: {...user},
        loaded: true, 
        loading: false, 
        error: null 
    }))
    
);

export function userReducer(state: any, action: any) {
    return _userReducer(state, action); 
}