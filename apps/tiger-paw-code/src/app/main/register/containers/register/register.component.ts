import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '@core/services/notification.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { UserLogin } from '@core/models/user-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notification: NotificationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.onChanges();
  }

  onChanges(): void {
    // this.registerForm.valueChanges.pipe(debounceTime(700)).subscribe(val => {
    //   this.userService.validUsername(val.username).subscribe(res => {
    //     if (!res) {
    //       this.registerForm.controls['username'].setErrors({
    //         InvalidUsername: true
    //       });
    //     } else {
    //       this.registerForm.controls['username'].setErrors(null);
    //     }
    //   });
    // });
  }

  initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9]+'),
          Validators.minLength(5)
          // Validators.maxLength(150)
        ]
      ]
    });
  }

  register(): void {
    // this.authService.logout();
    // const userLogin: UserLogin = Object.assign({}, this.registerForm.value);
    // this.userService.register(userLogin).subscribe(
    //   res => {
    //     if (!res) {
    //       this.notification.generateSnackbarNotification(
    //         'Registration form invalid.'
    //       );
    //       return;
    //     }
    //     this.authService.login(userLogin).subscribe(x => {
    //       this.router.navigate(['home']);
    //     });
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }
}
