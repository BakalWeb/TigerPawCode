import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { NotificationService } from '@core/services/notification.service';
import { LogService } from '@core/services/log.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private logService: LogService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  canActivate() {
      try {
        const currentUser = this._authService.currentUserValue;
        if (currentUser) {
          console.log(`Activated Route Guard: ${currentUser}`);
            return true;
        }

        this.notificationService.generateSnackbarNotification('You need to be logged in to see this area');
        this.router.navigate(['/login']);
        return false;
      } catch (error) {
        this.logService.handleError(error);
      }
  }
}
