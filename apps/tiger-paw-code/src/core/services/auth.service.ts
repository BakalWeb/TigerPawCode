import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '@core/models/user';
import { of, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private userService: UserService) {  }

  login(username: string, password: string): boolean {
    if (username === 'adamb' && password === 'password') {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userId', '1');
      this.loggedIn.next(true);
      return true;
    }

    this.loggedIn.next(false);
    return false;
  }

  getLoggedInUserId(): number {
    return localStorage.getItem('userId') != null ? + localStorage.getItem('userId') :  0;
  }

  logout(): any {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userId');
  }

  isLoggedInStream(): Observable<boolean> {
    this.loggedIn.next(this.isLoggedIn());
    return this.loggedIn.asObservable();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') != null ? true : false;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
