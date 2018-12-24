import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/models/user';
import { UserService } from '@core/services/user.service';
import { UserLogin } from '@core/models/user-login';

@Component({
  selector: 'app-login-header',
  styleUrls: ['./login.component.scss'],
  template: `
    <div *ngIf="loggedIn && user; else: login">
      {{ user.username }} <a href="home" (click)="logout()">Logout</a>
    </div>

    <ng-template #login>
      <button mat-button [routerLink]="['login']">Login</button>
    </ng-template>
  `
})
export class LoginHeaderComponent implements OnInit {
  message: string;
  user: UserLogin;
  loggedIn = false;

  constructor(
    public userService: UserService,
    private authService: AuthService
  ) {
    this.message = '';
  }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
    this.loggedIn = this.authService.currentUserValue ? true : false;
  }

  logout(): void {
    this.authService.logout();
  }
}
