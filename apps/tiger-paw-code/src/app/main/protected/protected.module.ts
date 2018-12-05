import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/modules/material.module';
import { ProtectedComponent } from './protected/protected.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ProtectedComponent
  ],
  exports: [
    ProtectedComponent
  ]
})
export class ProtectedModule { }
