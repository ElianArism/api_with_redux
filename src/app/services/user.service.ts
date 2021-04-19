import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// rxjs
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = `https://reqres.in/api`;

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get(`${this._url}/users?per_page=6&delay=3`)
      .pipe(
        map(({data}:any) => data)
      );
  }

  getUser(id: string) {
    return this._http.get(`${this._url}/users/${id}`)
      .pipe(
        map((data) => data)
      ); 
  }
}
