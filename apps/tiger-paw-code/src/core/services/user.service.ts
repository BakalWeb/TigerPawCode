import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@core/models/user';
import { environment } from '@env/environment';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { LogService } from './log.service';
import { UserContract } from '@core/models/contracts/user.contract';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient, private logService: LogService) {
    this.apiUrl = environment.inMemory ? environment.inMemoryApiUrl : environment.apiUrl;
   }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }
  getUserById(id: number): Observable<UserContract> {
    return this.http.get<UserContract>(`${this.apiUrl}/user/${id}`).pipe(
      map(x => {
        return x;
      })
    );
  }

  validUsername(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/user/username/${username}`);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/username/${username}`);
  }

  register(userLogin: UserContract): Observable<User> {
    try {
      return this.http
      .post<User>(`${this.apiUrl}/user/register`, userLogin)
      .pipe(
        map(x => {
          console.log(x);
          return x;
        })
      );
    } catch (error) {
      this.logService.handleError(error);
    }
  }

  public update(user: User): Observable<User> {
    try {
      return this.http.put<User>(`${this.apiUrl}/user/${user.id}`, user);
    } catch (error) {
      this.logService.handleError(error);
    }
  }
}
