import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoaderInterceptor, JwtInterceptor, ErrorInterceptor, ResponseInterceptor } from './tools/helpers';
import { AlertService } from './tools/services';
import { environment } from 'src/environments/environment';
import { CacheInterceptor } from './tools/helpers/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AlertService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    { provide: 'baseUrl', useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
