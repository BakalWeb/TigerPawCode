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

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  canActivate() {
        const currentUser = this._authService.currentUserValue;
        if (currentUser) {
            return true;
        }

        this.notificationService.generateSnackbarNotification('You need to be logged in to see this area');
        this.router.navigate(['/login']);
        return false;
  }
}
