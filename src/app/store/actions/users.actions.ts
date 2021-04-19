import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
    '[Users] Load Users Successfully', 
    props<{users: User[]}>()
);

export const loadUsersError = createAction(
    '[Users] Load Users Incorrectly', 
    props<{payload: any}>()
);
