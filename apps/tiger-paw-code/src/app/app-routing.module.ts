import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/containers/home/home.component';
import { LoggedInGuard } from '@core/guards/logged-in.guard';
import { ProtectedComponent } from './main/protected/protected/protected.component';

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
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'admin',
    loadChildren: './main/admin/admin.module#AdminModule',
    canActivate: [LoggedInGuard]
  },
  {
    path: 'profile',
    loadChildren: './main/profile/profile.module#ProfileModule',
    canActivate: [LoggedInGuard]
  },
  {
    path: 'timeline',
    loadChildren: './main/timeline/timeline.module#TimelineModule',
    canActivate: [LoggedInGuard]
  },
  {
    path: 'messages',
    loadChildren: './main/messages/messages.module#MessagesModule',
    canActivate: [LoggedInGuard]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
