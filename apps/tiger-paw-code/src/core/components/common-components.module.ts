import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHeaderComponent } from './login/login.component';
import { MaterialModule } from '@core/modules/material.module';
import { RouterModule } from '@angular/router';
import { MessageChipComponent } from './message-chip/message-chip.component';
import { BannerComponent } from './banner/banner.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    LoginHeaderComponent,
    MessageChipComponent,
    BannerComponent,
    SubscribeComponent
  ],
  exports: [
    LoginHeaderComponent,
    MessageChipComponent,
    BannerComponent,
    SubscribeComponent
  ]
})
export class CommonComponentsModule { }
