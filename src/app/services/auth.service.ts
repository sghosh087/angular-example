import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new Subject<any>();
  constructor() {

  }
  doLogin(username: string, password: string) {
    if (username && password) {
      if ((username === 'admin') && (password === 'admin')) {
        this.isLoggedIn.next(true);
        return true;
      } else {
        this.isLoggedIn.next(false);
        return false;
      }
    }
  }

  doLogout() {
      this.isLoggedIn.next(false);
  }

}
