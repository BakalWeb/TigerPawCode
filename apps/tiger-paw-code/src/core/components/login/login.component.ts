import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/models/user';
import { UserService } from '@core/services/user.service';
import { UserLogin } from '@core/models/user-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-header',
  styleUrls: ['./login.component.scss'],
  template: `
    <div *ngIf="loggedIn; else: login">
     <!-- {{ user.username }} -->
     <a href="home" class="header-button-login" (click)="logout()">Logout</a>
    </div>

  <ng-template class="login-container" #login>
      <p><a href="login" class="header-button-login">Login</a>
      <span class="divider">\\</span>
       <a href="register" class="header-button-login">Register</a></p>
    </ng-template>
  `
})
export class LoginHeaderComponent implements AfterViewInit {

  message: string;
  user: UserLogin;
  loggedIn = false;

  constructor(
    public userService: UserService,
    private authService: AuthService
  ) {
    this.message = '';

    this.user = this.authService.currentUserValue;
    this.loggedIn = this.authService.currentUserValue !== null ? true : false;
  }



  ngAfterViewInit(): void {
    this.user = this.authService.currentUserValue;
    this.loggedIn = this.authService.currentUserValue !== null ? true : false;
  }

  logout(): void {
    this.authService.logout();
  }
}
