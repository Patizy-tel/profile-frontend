import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard  {
  constructor(private auth: AuthService) { }
  canActivate(
  ): Observable<boolean> | Promise<boolean> | boolean {
    return (this.auth.isAdmin());
  }
}