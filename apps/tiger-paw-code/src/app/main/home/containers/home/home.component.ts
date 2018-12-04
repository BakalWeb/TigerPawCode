import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showLogin: false;
  user: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = new User();
    this.user.username = this.authService.getUser();
  }

  logout(): void {
    this.authService.logout();
  }

}
