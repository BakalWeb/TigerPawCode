import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/containers/home/home.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    loadChildren: './main/login/login.module#LoginModule'
  },
  {
    path: 'blog',
    loadChildren: './main/blog/blog.module#BlogModule'
  },
  {
    path: 'register',
    loadChildren: './main/register/register.module#RegisterModule'
  },
  {
    path: 'admin',
    loadChildren: './main/admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: './main/profile/profile.module#ProfileModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'timeline',
    loadChildren: './main/timeline/timeline.module#TimelineModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'messages',
    loadChildren: './main/messages/messages.module#MessagesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'tiger',
    loadChildren: './main/tiger/tiger.module#TigerModule'
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
