import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/modules/material.module';
import { BlogComponent } from './containers/blog/blog.component';
import { Route, RouterModule } from '@angular/router';
import { BlogService } from '@core/services/blog.service';
import { BlogItemPostedPipe } from '@core/pipes/blog-item-posted.pipe';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonComponentsModule } from '@core/components/common-components.module';

const routes: Route[] = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: ':id',
    component: BlogItemComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ScrollingModule,
    RouterModule.forChild(routes),
    CommonComponentsModule
  ],
  declarations: [
    BlogComponent,
    BlogItemPostedPipe,
    BlogItemComponent
  ],
  providers: [
    BlogService
  ],
  exports: [
    RouterModule
  ]
})
export class BlogModule { }
