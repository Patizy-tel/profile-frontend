import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router) { }
  canActivate(
  ): Observable<boolean> | Promise<boolean> | boolean {
    return (sessionStorage.getItem('token') ? true : this.router.navigate(['/auth/login']));

  }
}

