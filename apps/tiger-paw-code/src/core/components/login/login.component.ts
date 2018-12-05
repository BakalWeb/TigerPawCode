import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/models/user';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-login-header',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginHeaderComponent implements OnInit {
  message: string;
  user: User;
  loggedIn = false;

  constructor(
    public userService: UserService,
    private authService: AuthService
  ) {
    this.message = '';
  }

  ngOnInit() {
    this.authService.isLoggedInStream().subscribe((value: any) => {
      this.loggedIn = value;
      if (value) {
        const userId = +localStorage.getItem('userId');
        this.userService.getUserById(userId).subscribe( res => {
          this.user = res;
        }, error => {
          console.log(error);
        });
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
