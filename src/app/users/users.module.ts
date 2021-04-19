import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    ListUsersComponent, 
    UsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListUsersComponent, 
    UsersComponent
  ]
})
export class UsersModule { }
