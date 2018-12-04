import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@core/modules/material.module';
import { LoginComponent } from '@core/components/login/login.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [HomeComponent, LoginComponent],
  exports: [HomeComponent, LoginComponent]
})
export class HomeModule {}
