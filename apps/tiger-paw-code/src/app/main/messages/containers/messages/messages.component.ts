import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '@core/services/message.service';
import { AuthService } from '@core/services/auth.service';
import { MessageItem } from '@core/models/message-item';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  userId: number;
  dataSource: MatTableDataSource<MessageItem>;
  displayedColumns: string[] = ['datecreated', 'subject', 'sender'];

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // this.userId = this.authService.getLoggedInUserId();

    if (this.userId > 0) {
      this.getMessages();
    }
  }

  getMessages(): void {
    this.messageService.getAllMessages().subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort; // todo matSort not firing
      },
      error => {
        console.error(error);
      }
    );
  }

  messageSelected(selectedMessage: MessageItem): void {
    selectedMessage.dateRead = new Date();
    this.messageService.updateMessage(selectedMessage);
  }
}
