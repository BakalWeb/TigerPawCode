import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { UserProfileService } from '@core/services/userprofile.service';
import { environment } from '@env/environment';
import { UserProfile } from '@core/models/user-profile';
import { UserService } from '@core/services/user.service';
import { User } from '@core/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '@core/services/profile.service';
import { NotificationService } from '@core/services/notification.service';
import { ProfileContract } from '@core/models/contracts/profile.contract';
import { take } from 'rxjs/operators';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: ProfileContract;
  profileForm: FormGroup;
  file: File[] = [];
  avatar: string;

  constructor(
    private userProfileService: UserProfileService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.getUserProfile();
  }


  initializeForm(): void {
    this.profileForm = this.formBuilder.group({
      // user
      userContract: this.formBuilder.group({
        id: [this.profile.userContract.id || null],
        firstName: [
          this.profile.userContract.firstName || null,
          Validators.required
        ],
        lastName: [
          this.profile.userContract.lastName || null,
          Validators.required
        ],
        username: [
          this.profile.userContract.username || null,
          Validators.required
        ],
        email: [this.profile.userContract.email || null, Validators.required],
        subscribed: [
          this.profile.userContract.subscribed || false,
          Validators.required
        ]
      }),
      // user profile
      userProfile: this.formBuilder.group({
        id: [this.profile.userProfile.id || null],
        userId: [this.profile.userProfile.userId || null],
        aboutMe: [this.profile.userProfile.aboutMe || null],
        avatar: [this.profile.userProfile.avatar || null]
      })
    });
  }

  getUserProfile(): void {
    this.userProfileService.getUserProfile().subscribe(
      res => {
        if (res) {
          // instaniate the profile object
          this.profile = new ProfileContract();
          this.profile.userProfile = res;

          // set a default avatar


          this.getUserContract(res.userId);
        }
      },
      error => {
        console.error('User profile', error);
      }
    );
  }

  getUserContract(userId: number): void {
    this.userService.getUserById(userId).subscribe(
      res => {
        this.profile.userContract = res;
        if (res) {
          this.initializeForm();
        }
      },
      error => {
        console.error('User', error);
      }
    );
  }

  public uploadFile = () => {
    if (this.file.length <= 0)     {
      console.log('empty file');
      return;
    }

    this.profileService.updateAvatar(<File>this.file[0])
      .subscribe(event => {
        this.avatar = event;
      });
  }

  fileChange(file: File[] ) {
    this.file = file;
  }

  updateProfile() {
    this.uploadFile();
    if (!this.profileForm.valid) {
      this.notificationService.generateSnackbarNotification(
        'You must fix any errors with the form before you can update your profile'
      );
      return;
    }
    const profile = Object.assign({}, this.profileForm.value);
    this.profileService.updateProfile(profile).subscribe(
      res => {
        if (res) {
          // successful update
          this.profile = res;
          this.profile.userProfile.avatar = this.avatar;
          this.initializeForm();
          this.notificationService.generateSnackbarNotification(
            'Profile successfully updated'
          );
        }
      },
      error => {
        console.error('Updating profile', error);
      }
    );
  }
}
