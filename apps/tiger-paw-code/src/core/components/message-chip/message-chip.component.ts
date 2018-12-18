import { Component, OnInit } from '@angular/core';
import { MessageService } from '@core/services/message.service';

@Component({
  selector: 'app-message-chip',
  styleUrls: ['./message-chip.component.scss'],
  template: `
     <a [routerLink]="['messages']">
      <mat-icon *ngIf="unreadCount > 0; else: annoucement"
      matBadge="{{unreadCount}}" matBadgeColor="warn"
      matBadgePosition="above after"
      class="announcement-badge"
        >announcement</mat-icon>
        </a>

      <ng-template #annoucement>
        <mat-icon class="announcement-badge">announcement</mat-icon>
      </ng-template>
  `
})
export class MessageChipComponent implements OnInit {
  unreadCount = 0;

  constructor(private messageService: MessageService) {

  }

  ngOnInit() {
    this.messageService.count.subscribe(res => {
      this.unreadCount = res;
    });
  }
}
