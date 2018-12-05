import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './containers/log-in/log-in.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '@core/modules/material.module';

const routes: Route[] = [
  {
    path: '',
    component: LogInComponent
  }
];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  declarations: [LogInComponent],
  exports: [LogInComponent, RouterModule]
})
export class LoginModule {}
