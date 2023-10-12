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



  postContractingEntity(contracting: any) {
    return this.apis.post('/contracting-entity', contracting);
  }

  getAllContractingEntity() {
    return this.apis.get('/contracting-entity');
  }



  getSingleContactingEntity(id: string) {
    return this.apis.get(`/contracting-entity/single/${id}`);
  }
}
