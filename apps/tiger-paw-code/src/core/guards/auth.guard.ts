import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { MessageService } from '@core/services/message.service';
import { NotificationService } from '@core/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router) {
  }

  canActivate() {
    // check if they have a token at all
    if (!this.authService.getUserLogin()) {
      // this.router.navigate(['home']);
      this.notificationService.generateSnackbarNotification('You must be logged in to see this area');
      return false;
      // check token expiry
    } else if (!this.authService.isTokenExpired()) {
      return true;
    }

    // must have had a token that has now expired
      this.notificationService.generateSnackbarNotification('Your session has expired, please log in again');
      return false;
  }
}
