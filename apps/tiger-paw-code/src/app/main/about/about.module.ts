import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './containers/about/about.component';
import { MaterialModule } from '@core/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    AboutComponent
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
