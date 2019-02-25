import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserLogin } from '@core/models/user-login';
import { AuthService } from '@core/services/auth.service';

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
export class LoginHeaderComponent implements OnInit, AfterViewInit {
  message: string;
  user: UserLogin;
  loggedIn = false;

  constructor(
    private authService: AuthService
  ) {
    // this.authService.isUserLoggedIn().subscribe(res => {
    //   this.loggedIn = res;
    // });
    this.message = '';
  }

  ngOnInit(): void {
    // this.authService.isLoginSubject.subscribe(value => {
    //   console.log('login component', value);
    //   this.loggedIn = value;
    // }, error => {
    //   console.log(error);
    // })
  }

  ngAfterViewInit(): void {
  }

  logout(): void {
  }
}
