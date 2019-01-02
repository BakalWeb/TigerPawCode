import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedInGuard } from '@core/guards/logged-in.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@core/modules/material.module';
import { HomeModule } from './main/home/home.module';
import { RouterModule } from '@angular/router';
import { AuthService, AUTH_PROVIDERS } from '@core/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeApiService } from '@core/services/in-memory-api/in-memory';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from '@core/components/common-components.module';
import { EscapeHtmlPipe } from '@core/pipes/keep-html.pipe';
import { UserService } from '@core/services/user.service';
import { JwtInterceptor } from '@core/interceptors/jwt.interceptor';

@NgModule({
  declarations: [AppComponent, EscapeHtmlPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentsModule,
    // InMemoryWebApiModule.forRoot(FakeApiService, {
    //   passThruUnknownUrl: true
    // })
  ],
  providers: [
    AuthService,
    AUTH_PROVIDERS,
    LoggedInGuard,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
