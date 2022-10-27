import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/interfaces/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  submitLogin(user: UserLogin) {
    console.log(user)
  }
}
