import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '@core/services/notification.service';
import { AuthService } from '@core/services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  loginFail: boolean;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.intializeForm();
  }

  intializeForm(): void {
    this.loginForm = this.fb.group({
      username: ['bakalweb', Validators.required],
      password: ['wonderfulgrape2', Validators.required],
    });
  }

  logIn(): void {
    if (this.loginForm.invalid) {
      this.notificationService.generateSnackbarNotification('Invalid login, please try again');
        return;
    }

    this.authService.login(Object.assign({}, this.loginForm.value))
      .subscribe(
        data => {
          this.router.navigate(['home']);
        },
        error => {
          if (error.status === 401) {
            this.notificationService.generateSnackbarNotification('Invalid login, please try again');
          } else {
            this.notificationService.generateSnackbarNotification('There was an error trying to log you in, please try again');
            console.log(error);
          }

        });
  }
}
