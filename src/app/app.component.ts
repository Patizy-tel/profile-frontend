import { Component, OnInit } from '@angular/core';
import { LoaderService, AlertService } from './tools/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  load = false;
  isOnline: boolean;
  modalVersion: boolean;
  modalPwaEvent: any;
  modalPwaPlatform: string | undefined;
  constructor(
    public loaderService: LoaderService,
    private alertService: AlertService,

  ) {
    this.loaderService.isLoading.subscribe((resp) => {
      this.load = resp;
    });

    this.isOnline = false;
    this.modalVersion = false;
  }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe(resp =>{
      this.load = resp;
      if(this.load){
        this.alertService.loader();
      }else{
        this.alertService.closeLoader();
      }

    });

  }}