import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@core/models/user';
import { environment } from '@env/environment';
import { AuthService } from './auth.service';
import { UserLogin } from '@core/models/user-login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.inMemory
      ? environment.inMemoryApiUrl
      : environment.apiUrl;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }

  // getUserByUsername(username: string): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}/user/username/${username}`);
  // }

  validUsername(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/user/username/${username}`);
  }

  register(userLogin: UserLogin): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}/user/register`, userLogin)
      .pipe(
        map(x => {
          console.log(x);
          return x;
        })
      );
  }
}
