import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './containers/admin/admin.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '@core/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogsListComponent } from './components/blogs-list/blogs-list.component';

const routes: Route[] = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'blogs/create',
    component: BlogItemComponent
  },
  {
    path: 'blogs/create/:id',
    component: BlogItemComponent
  },
  {
    path: 'blogs/update/:id',
    component: BlogItemComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AdminComponent, BlogItemComponent, BlogsListComponent],
  exports: [AdminComponent, RouterModule]
})
export class AdminModule {}
