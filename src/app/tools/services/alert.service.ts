import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import * as Notiflix from 'notiflix';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AlertService extends LoaderService {
  triggetUpdate = new BehaviorSubject(false);
  error(text: string, callback?: any) {
    Notiflix.Notify.failure(text || 'Server Error', callback, {
      position: 'center-center',
      cssAnimation: true,
      cssAnimationStyle: 'from-bottom',
      clickToClose: true,
      closeButton: true,
      useIcon: true,
      fontSize: '20px',
      borderRadius: '20px',
      width: '500px',
    });
  }

  success(text: string, callback?: any) {
    Notiflix.Notify.success(text, callback, {
      position: 'center-center',
      cssAnimation: true,
      cssAnimationStyle: 'from-bottom',
      useIcon: true,
      fontSize: '20px',
      borderRadius: '20px',
      width: '500px',
    });
  }


  loader(callback?: any) {

    Notiflix.Loading.pulse('Loading',{
      cssAnimation: true,
      backgroundColor: 'rgba(145, 185, 224, 0.8)',

    });

  }


  closeLoader (){
    Notiflix.Loading.remove();
  }


}
