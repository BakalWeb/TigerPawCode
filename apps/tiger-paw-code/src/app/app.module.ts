import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService, AUTH_PROVIDERS } from './services/auth.service';
import { ProtectedComponent } from './core/components/protected/protected.component';
import { LoggedInGuard } from './core/guards/logged-in.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/modules/material.module';
import { HomeModule } from './main/home/home.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SidebarComponent } from './main/sidebar/containers/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    RouterModule
  ],
  providers: [ AuthService, AUTH_PROVIDERS, LoggedInGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
