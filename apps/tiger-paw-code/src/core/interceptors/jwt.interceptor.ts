import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { LogService } from '@core/services/log.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private logService: LogService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    try {
      const jwt = this.authService.loggedInJwt();
      if (jwt) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${jwt}`
          }
        });
      }

      return next.handle(request);
    } catch (error) {
      this.logService.handleError(error);
    }
  }
}
