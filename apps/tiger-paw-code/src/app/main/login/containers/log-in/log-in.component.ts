import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { NotificationService } from '@core/services/notification.service';
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
    private authService: AuthService,
    private notification: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.intializeForm();
  }

  intializeForm(): void {
    this.loginForm = this.fb.group({
      username: ['adamb', Validators.required],
      password: ['password', Validators.required],
      rememberMe: [true]
    });
  }

  logIn(): void {
    const success = this.authService.login(
      this.loginForm.controls['username'].value,
      this.loginForm.controls['password'].value
    );

    // todo handle the remember me formcontrol
    if (!success) {
      this.notification.generateSnackbarNotification(
        'Login failed. Username or password incorrect.'
      );
      return;
    }

    this.router.navigateByUrl('home');
  }
}
