import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { User } from 'src/app/models/user.model';

import { Store } from '@ngrx/store';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  private subs: Subscription | undefined; 
  private subsStore: Subscription | undefined; 
  loading: any; 
  error: any;
  userCopy: any | User = null; 
  
  constructor(private _router: ActivatedRoute, private _store: Store<AppState>) { }

  ngOnInit(): void {
    this.subsStore = this._store.select('user').subscribe(({user, loading, error}) => {
      this.userCopy = {...user}; 
      console.log(user);
      this.loading = loading; 
      this.error = error;
    });

    this.subs = this._router.params.subscribe(({ id }) => {
      this._store.dispatch( loadUser({user_id: id}) )
    }) 
  }
  
  ngOnDestroy() {
    this.subs?.unsubscribe(); 
    this.subsStore?.unsubscribe();
  }


}
