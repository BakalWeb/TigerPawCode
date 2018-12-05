import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { EscapeHtmlPipe } from '@core/pipes/keep-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // private notification = new BehaviorSubject<string>('');
  constructor(public snackBar: MatSnackBar, private santizer: DomSanitizer) {}

  generateSnackbarNotification(
    message: string,
    duration?: number,
    action?: string
  ) {
    // this.notification.next(message);
    this.snackBar.open(message, 'Dismiss', {
      duration: 15000,
      verticalPosition: 'top'
    });
  }

  dismissSnackbarNotification(): void {
    this.snackBar.dismiss();
  }
}
