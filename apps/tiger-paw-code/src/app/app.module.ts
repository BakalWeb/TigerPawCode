import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@core/modules/material.module';
import { HomeModule } from './main/home/home.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from '@core/components/common-components.module';
import { EscapeHtmlPipe } from '@core/pipes/keep-html.pipe';
import { ScrollHeaderDirective } from '@core/directives/scroll-header.directive';
import { AuthService } from '@core/services/auth.service';
import { JwtInterceptor } from '@core/interceptors/jwt.interceptor';

@NgModule({
  declarations: [AppComponent, EscapeHtmlPipe, ScrollHeaderDirective],
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
