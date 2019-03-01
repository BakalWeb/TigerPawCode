import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UserLogin } from '@core/models/user-login';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;
  public JWT_TOKEN_NAME = 'tigerpawcode-jwt';
  public loginSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.apiUrl = environment.inMemory
    ? environment.inMemoryApiUrl
    : environment.apiUrl;
  }

  // returns user login from jwt
  public getUserLogin(): UserLogin {
    const token = localStorage.getItem(this.JWT_TOKEN_NAME);
    return <UserLogin>JSON.parse(token);
  }

  // determines if session has a token
  public hasToken(): boolean {
    return (localStorage.getItem(this.JWT_TOKEN_NAME)) ? true : false;
  }

  // returns date of jwt expiration
  private getTokenExpirationDate(): Date {
    return (this.getUserLogin()) ? this.getUserLogin().expiry : null;
  }

  // determines if jwt is expired
  public isTokenExpired(): boolean {
    const result =  (moment(this.getTokenExpirationDate()) < moment()) ? true : false;
    return result;
  }

  public isLoggedIn(): Observable<boolean> {
    let result = false;

    // determines if a user has a token
    if (!this.hasToken()) {
      console.log('isLoggedIn', 'User doesnt have a token');
      this.loginSubject.next(result);
      return this.loginSubject.asObservable();
    }

    // checks if token is expired
    result = this.isTokenExpired();

    // returns subject as an observable
    this.loginSubject.next(result);
    return this.loginSubject.asObservable();
  }

  public logout() {
    this.loginSubject.next(false);
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
              this.loginSubject.next(true);
              localStorage.setItem(this.JWT_TOKEN_NAME, JSON.stringify(userLogin));
            }
            return userLogin;
          }
        )
      );
  }
}
