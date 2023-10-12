import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { LoaderService } from '../services';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      // proceed when there is a response; ignore other events
      filter(event => event instanceof HttpResponse),
      map(
        (event: HttpResponse<any>) => {
          this.loaderService.hide();

           return event;
        })
    );
  }
}