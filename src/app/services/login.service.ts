import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserLogin } from 'src/app/interfaces/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  submitLogin(user: UserLogin):Observable<any> {
    return this._http.post('https://codigo-alfa.cl/Api/validaUserBootcamp', user, {
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    });
  }
}
