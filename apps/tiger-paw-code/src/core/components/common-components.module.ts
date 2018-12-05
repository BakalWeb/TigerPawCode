import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHeaderComponent } from './login/login.component';
import { MaterialModule } from '@core/modules/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    LoginHeaderComponent,
  ],
  exports: [
    LoginHeaderComponent,
  ]
})
export class CommonComponentsModule { }
