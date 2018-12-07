import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/modules/material.module';
import { RouterModule, Route } from '@angular/router';
import { TimelineComponent } from './containers/timeline/timeline.component';

const routes: Route[] = [
{
  path: '',
  component: TimelineComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimelineComponent],
  exports: [
    RouterModule
  ]
})
export class TimelineModule { }
