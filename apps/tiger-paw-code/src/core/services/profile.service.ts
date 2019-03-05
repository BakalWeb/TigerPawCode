import { Injectable } from '@angular/core';
import { UserProfileService } from './userprofile.service';
import { UserService } from './user.service';
import { ProfileContract } from '@core/models/contracts/profile.contract';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl: string;

  constructor(
    private http: HttpClient,
    private userProfileService: UserProfileService,
    private userService: UserService) {
      this.apiUrl = environment.inMemory ? environment.inMemoryApiUrl : environment.apiUrl;
    }

  public updateProfile(profile: ProfileContract): Observable<ProfileContract> {
  // need to update both user and userprofile models contained in contract
  // we are going to let the api handle the logic so if one model fails to update
  // then the api can prevent the other model from being updated
    return this.http.post<ProfileContract>(`${this.apiUrl}/profile/update`, profile);
  }

}
