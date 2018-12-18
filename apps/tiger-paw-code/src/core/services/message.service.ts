import { Injectable } from '@angular/core';
import { Observable, pipe, of, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { MessageItem } from '@core/models/message-item';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  count: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.setMessageUnreadCount();
   }

  setMessageUnreadCount(): void {
    const userId = this.authService.getLoggedInUserId();
    if (userId <= 0) {
      this.count.next(0);
      return;
    }
    this.getAllMessages(userId).subscribe( res => {
      this.count.next(res.filter(x => x.dateRead == null).length);
    });
  }

  getAllMessages(userId?: number): Observable<MessageItem[]> {
    if (isNaN(userId)) {
      if (this.authService.getLoggedInUserId() <= 0) {
      return of(null);
      } else {
        userId = this.authService.getLoggedInUserId();
      }
    }

    return this.http.get<MessageItem[]>(`${environment.apiUrl}/messages/?recipientId=${userId}`
      )
      .pipe(
        map((data: MessageItem[]) => {
          return data.sort((a: any, b: any) => {
            if (a.dateCreated < b.dateCreated) {
              return -1;
            } else if (a.dateCreated > b.dateCreated) {
              return 1;
            } else {
              return 0;
            }
          });
        })
      );
  }

  getMessage(messageId: number): Observable<MessageItem> {
    return this.http.get<MessageItem>(`${environment.apiUrl}/messages/?id=${messageId}`)
    .pipe(
      tap(x => {
        console.log(`Get Message Item: ${x}`);
      }
      )
    );
  }

  updateMessage(message: MessageItem): void {
    this.http.put(`${environment.apiUrl}/messages`, message);
    this.setMessageUnreadCount();
  }
}
