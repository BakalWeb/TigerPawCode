import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHeaderComponent } from './login/login.component';
import { MaterialModule } from '@core/modules/material.module';
import { RouterModule } from '@angular/router';
import { MessageChipComponent } from './message-chip/message-chip.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    LoginHeaderComponent,
    MessageChipComponent
  ],
  exports: [
    LoginHeaderComponent,
    MessageChipComponent
  ]
})
export class CommonComponentsModule { }
