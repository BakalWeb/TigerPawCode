import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@core/modules/material.module';
import { CommonComponentsModule } from '@core/components/common-components.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, CommonComponentsModule],
  declarations: [HomeComponent],
  exports: []
})
export class HomeModule {}
