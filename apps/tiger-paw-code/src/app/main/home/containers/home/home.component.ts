import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/core/models/user';

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
