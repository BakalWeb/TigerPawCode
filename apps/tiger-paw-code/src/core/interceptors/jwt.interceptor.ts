import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userLogin = this.authService.getUserLogin();

    if (userLogin) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userLogin.token}`
        }
      });
    }

    return next.handle(request);
  }
}
