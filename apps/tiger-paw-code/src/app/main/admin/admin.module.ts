import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './containers/admin/admin.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '@core/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent,
    RouterModule
  ]
})
export class AdminModule { }
