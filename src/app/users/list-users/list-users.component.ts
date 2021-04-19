import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: []
})
export class ListUsersComponent implements OnInit {
  public users: User[] = []; 
  public loading: boolean = false; 
  public error: any; 
  constructor(
    // private _userServ: UserService Forma sin efectos
    private _store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this._store.select('users').subscribe(({users, loading, error}) => {
      this.users = users; 
      this.loading = loading; 
      this.error = error;
    }); 
    this._store.dispatch( loadUsers() );

    // Forma sin efectos
    // this._userServ.getUsers()
    //   .subscribe(users => {
    //     this.users = users
    //     console.log(users);
    //   });
  }

}
