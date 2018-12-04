import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/core/components/login/login.component';
import { MaterialModule } from 'src/app/core/modules/material.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [HomeComponent, LoginComponent],
  exports: [HomeComponent, LoginComponent]
})
export class HomeModule {}
