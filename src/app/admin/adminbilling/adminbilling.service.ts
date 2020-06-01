import { Injectable } from '@angular/core';
import { BillingInterface } from './adminbilling.interface';
@Injectable({
    providedIn: 'root'
})
export class BillingService{

     BILLINGS_DATA: BillingInterface[] = [
        // {name: 'On-Point FX Signals 7-Day FREE 7', description: 'Access our 7-Day INTENSIVE Private Forex Training resources', oneOff: 'NO', currency: 'USD', price: '643', cycle: 21, term: 'Forever'}
      ];

      getBillings(){
          return this.BILLINGS_DATA.slice();
      }
      
}