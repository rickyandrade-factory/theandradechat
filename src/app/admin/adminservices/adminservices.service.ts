import { Injectable } from '@angular/core';
import {ServiceInterface} from './adminservices.interface';
@Injectable({
    providedIn: 'root'
})
export class ServiceService{

     SERVICES_DATA: ServiceInterface[] = [
        //{name: 'On Point FX Signals O', description: 'Access our 7-Day INTENSIVE Private Forex Training resources', url: 'www.mmagoldencircle.com/market-mastermind-1', plan:'USD', coupon: '',sort: '', }
      ];

      getServices(){
          return this.SERVICES_DATA.slice();
      }
}