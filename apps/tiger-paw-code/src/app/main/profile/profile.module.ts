import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './containers/profile/profile.component';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '@core/modules/material.module';

const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent],
  exports: [
    RouterModule
  ]
})
export class ProfileModule { }
