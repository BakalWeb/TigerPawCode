import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { UserContract } from '@core/models/contracts/user-login.contract';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;
  public jwtTokenName = environment.jwtTokenName;
  public loginSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.apiUrl = environment.inMemory
    ? environment.inMemoryApiUrl
    : environment.apiUrl;
  }

  // returns user login from jwt
  public getUserLogin(): UserContract {
    const token = localStorage.getItem(this.jwtTokenName);
    return <UserContract>JSON.parse(token);
  }

  // determines if session has a token
  public hasToken(): boolean {
    return (localStorage.getItem(this.jwtTokenName)) ? true : false;
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
    if (result) {
      console.log('expired token');
      this.logout();
      this.loginSubject.next(null);
      return this.loginSubject.asObservable();
    }

    // if we have got here then the user is logged in with a valid session
    result = true;

    // returns subject as an observable
    this.loginSubject.next(result);
    console.log('user is logged in', result);
    return this.loginSubject.asObservable();
  }

  public logout() {
    localStorage.removeItem(this.jwtTokenName);
    this.loginSubject.next(null);
  }

  public login(user: UserContract): Observable<UserContract> {
    // first logout
    this.logout();

    // call api for auth result
    return this.http.post<UserContract>(`${this.apiUrl}/authentication`, user)
      .pipe(
        map(
          userLogin => {
            if (userLogin) {
              this.loginSubject.next(true);
              localStorage.setItem(this.jwtTokenName, JSON.stringify(userLogin));
            }
            return userLogin;
          }
        )
      );
  }
}
