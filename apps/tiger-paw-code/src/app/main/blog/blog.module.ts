import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/modules/material.module';
import { BlogComponent } from './containers/blog/blog.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: BlogComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    BlogComponent
  ],
  exports: [
    BlogComponent,
    RouterModule
  ]
})
export class BlogModule { }
