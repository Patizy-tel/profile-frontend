import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpcacheService {
  private requests: any = {};

  get(url: string): HttpResponse<any> {
    return this.requests[url];
  }

  put(url: string, response: HttpResponse<any>): void {
    this.requests[url] = response;
  }

  invalidateUrl(url: string): void {
    this.requests[url] = undefined;
  }

  invalidateCache(): void {
    this.requests = {};
  }
}
