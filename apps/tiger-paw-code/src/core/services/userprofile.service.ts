import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { UserProfile } from '@core/models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.inMemory
    ? environment.inMemoryApiUrl
    : environment.apiUrl;
  }

  public getUserProfile(): Observable<UserProfile> {
    const userId = JSON.parse(localStorage.getItem(environment.jwtTokenName))['id'];
    return this.http.get<UserProfile>(`${this.apiUrl}/userprofile/${userId}`);
  }
}
