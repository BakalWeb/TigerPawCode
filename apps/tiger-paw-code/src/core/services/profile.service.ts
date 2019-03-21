import { Injectable } from '@angular/core';
import { UserProfileService } from './userprofile.service';
import { UserService } from './user.service';
import { ProfileContract } from '@core/models/contracts/profile.contract';
import { environment } from '@env/environment';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl: string;

  constructor(
    private http: HttpClient) {
      this.apiUrl = environment.inMemory ? environment.inMemoryApiUrl : environment.apiUrl;
    }

  public updateProfile(profile: ProfileContract): Observable<ProfileContract> {
  // need to update both user and userprofile models contained in contract
  // we are going to let the api handle the logic so if one model fails to update
  // then the api can prevent the other model from being updated
    return this.http.post<ProfileContract>(`${this.apiUrl}/profile/update`, profile);
  }

  public getProfile(profileId: number): Observable<ProfileContract> {
    return this.http.get<ProfileContract>(`${this.apiUrl}/profile/${profileId}`);
  }

  public updateAvatar(file: File): Observable<string> {
    // create form data from file
    const formData = new FormData();
    formData.append('file', file, file.name);

    // set headers
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'text/plain; charset=utf-8');

    return this.http.post<string>(`${this.apiUrl}/profile/avatar`, formData, { headers: headers });
  }

}
