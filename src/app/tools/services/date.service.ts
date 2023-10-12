import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  getFirstDayOfMonth(year:any, month:any) {
    return  moment(new Date(year, month, 1)).format('YYYY-MM-DD');
  }

  formatDate(date:any){
    return moment(date).format('YYYY-MM-DD');
  }


  convertDate(timestamop){
    return new Date(timestamop).toLocaleString('en-US');

  }

}
