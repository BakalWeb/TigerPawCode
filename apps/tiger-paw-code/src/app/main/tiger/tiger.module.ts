import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TigerComponent } from './containers/tiger.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: TigerComponent
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TigerComponent],
  exports: [
   RouterModule
  ]
})
export class TigerModule { }
