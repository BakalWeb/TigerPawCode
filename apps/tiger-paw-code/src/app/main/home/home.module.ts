import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@core/modules/material.module';
import { CommonComponentsModule } from '@core/components/common-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, CommonComponentsModule, HttpClientModule],
  declarations: [HomeComponent],
  exports: []
})
export class HomeModule {}
