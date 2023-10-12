import { Injectable } from '@angular/core';
import { AlertService } from '.';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService  extends AlertService {

  constructor(private apis: ApisService) {
    super();
  }



  postProfile(contracting: any) {
    return this.apis.post('/profile', contracting);
  }

  getPaginatedProfile(currentPage:number) {
    return this.apis.get(`/api/profiles?page=${currentPage}`);
  }
}
