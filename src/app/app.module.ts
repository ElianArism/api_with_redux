import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// routing 
import { AppRoutingModule } from './app-routing.module';

// app  
import { AppComponent } from './app.component';

// NGRX 
import { StoreModule } from '@ngrx/store';
import { userReducer, usersReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';

// modulos propios
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    SharedModule,
    UsersModule,

    StoreModule.forRoot({users: usersReducer, user: userReducer}), 
    EffectsModule.forRoot( EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
