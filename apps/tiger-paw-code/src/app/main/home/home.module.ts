import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@core/modules/material.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
