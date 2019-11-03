import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@ Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  showLogin: boolean = true;

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(
      data => this.showLogin = !data
    );
  }

  logout() {
    this.authService.doLogout();
    this.showLogin = true;
    this.router.navigate(['/']);
  }

}
