import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UserLogin } from '@core/models/user-login';
import { environment } from '@env/environment';
import { map, catchError } from 'rxjs/operators';
import { NotificationService } from './notification.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;
  public JWT_TOKEN_NAME = 'tigerpawcode-jwt';
  // public isLoginSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient, private notificationService: NotificationService) {
    this.apiUrl = environment.inMemory
    ? environment.inMemoryApiUrl
    : environment.apiUrl;
  }

  // allows log-in component to update subject
  public setLoginSubject(val: boolean) {
    // this.isLoginSubject.next(val);
  }

  // returns user login from jwt
  public getUserLogin(): UserLogin {
    const token = localStorage.getItem(this.JWT_TOKEN_NAME);
    return <UserLogin>JSON.parse(token);
  }

  // sets jwt
  private setToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN_NAME, token);
  }

  // determines if session has a token
  private hasToken(): boolean {
    return (localStorage.getItem(this.JWT_TOKEN_NAME)) ? true : false;
  }

  // returns date of jwt expiration
  private getTokenExpirationDate(): Date {
    return (this.getUserLogin()) ? this.getUserLogin().expiry : null;
  }

  // determines if jwt is expired
  public isTokenExpired(): boolean {
    const result =  (moment(this.getTokenExpirationDate()) > moment()) ? false : true;
    if (result) {
      this.logout();
    }

    return result;
  }

  // public isUserLoggedIn(): Observable<boolean> {
  //   return this.isLoginSubject.asObservable();
  // }

  private isLoggedIn(): boolean {
    let result = false;

    // determines if a user has a token
    if (!this.hasToken()) {
      // this.isLoginSubject.next(false);
      return result;
    }
    // determines if user token has expired
    if (!this.getTokenExpirationDate()) {
      // this.isLoginSubject.next(false);
      return result;
    }

    // checks if token is expired
    result = this.isTokenExpired();

    // this.isLoginSubject.next(result);
    return result;
  }

  public logout() {
    // this.isLoginSubject.next(false);
    localStorage.removeItem(this.JWT_TOKEN_NAME);
  }

  public login(user: UserLogin): Observable<UserLogin> {
    // first logout
    this.logout();

    // call api for auth result
    return this.http.post<UserLogin>(`${this.apiUrl}/user/authenticate`, user)
      .pipe(
        map(
          userLogin => {
            if (userLogin) {
              localStorage.setItem(this.JWT_TOKEN_NAME, JSON.stringify(userLogin));
            }
            return userLogin;
          }
        )
      );
  }
}
