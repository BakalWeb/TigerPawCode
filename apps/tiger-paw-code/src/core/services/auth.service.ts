import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '@core/models/user-login';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { User } from '@core/models/user';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserLogin>;
  public currentUser: Observable<UserLogin>; // this will need changing to user at some point
  private apiUrl: string;

  constructor(private http: HttpClient, private logService: LogService) {
    this.apiUrl = environment.inMemory
      ? environment.inMemoryApiUrl
      : environment.apiUrl;
    this.currentUserSubject = new BehaviorSubject<UserLogin>(JSON.parse(localStorage.getItem('jwt')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(login: UserLogin) {
    try {
      this.logout();
    return this.http.post(`${this.apiUrl}/user/authenticate`, login).pipe(
      map(token => {
        // login successful if there's a jwt token in the response
        if (token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('jwt', JSON.stringify(token));
          this.currentUserSubject.next(login);
        }

        return login;
      })
    );
    } catch (error) {
      this.logService.handleError(error);
    }
  }

  public get currentUserValue(): UserLogin {
    return this.currentUserSubject.value;
}

  logout(): any {
    // remove user from local storage to log user out
    localStorage.removeItem('jwt');
    this.currentUserSubject.next(null);
  }

  loggedInJwt(): string {
    return localStorage.getItem('jwt') != null
      ? localStorage.getItem('jwt')
      : null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
