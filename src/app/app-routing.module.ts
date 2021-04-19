import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  {
    path: 'home', component: ListUsersComponent
  }, 
  {
    path: 'users/:id', component: UsersComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
