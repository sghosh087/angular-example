import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('myFrm') myFrm: NgForm;
  email: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    this.email = this.myFrm.value.email;
    this.password = this.myFrm.value.password;
    if (this.email && this.password) {
      if (this.authService.doLogin(this.email, this.password)) {
        this.router.navigate(['dashboard']);
      } else {
        this.errorMsg = 'Invalid Usernme / Password';
      }
    } else {
      this.errorMsg = 'Please provide a valid username and password.';
    }
  }
}
