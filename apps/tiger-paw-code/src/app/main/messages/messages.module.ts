import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './containers/messages/messages.component';
import { MaterialModule } from '@core/modules/material.module';
import { RouterModule, Route } from '@angular/router';
import { MessageDetailsComponent } from './components/message-details/message-details.component';
import { MessageService } from '@core/services/message.service';

const routes: Route[] = [
  {
    path: '',
    component: MessagesComponent
  },
  {
    path: ':id',
    component: MessageDetailsComponent
  }
];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  declarations: [MessagesComponent, MessageDetailsComponent],
  providers: [
    MessageService
  ],
  exports: [RouterModule]
})
export class MessagesModule {}
