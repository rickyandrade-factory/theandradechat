import { Injectable } from '@angular/core';
import { CouponsInterface } from './admincoupons.interface';
@Injectable({
    providedIn: 'root'
})
export class CouponService{

     COUPONS_DATA: CouponsInterface[] = [
        {name: 'On-Point FX Signals 7-Day FREE O', amount: 23, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring P.	', amount: 43, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring O.	', amount: 21, currency: 'USD', percentOff: '100%'},
        {name: 'On-Point FX Signals 7-Day FREE O', amount: 23, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring P.	', amount: 43, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring O.	', amount: 21, currency: 'USD', percentOff: '100%'},
        {name: 'On-Point FX Signals 7-Day FREE O', amount: 23, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring P.	', amount: 43, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring O.	', amount: 21, currency: 'USD', percentOff: '100%'},
        {name: 'On-Point FX Signals 7-Day FREE O', amount: 23, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring P.	', amount: 43, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring O.	', amount: 21, currency: 'USD', percentOff: '100%'},
        {name: 'On-Point FX Signals 7-Day FREE O', amount: 23, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring P.	', amount: 43, currency: 'USD', percentOff: '100%'},
        {name: 'Private Forex Mentoring O.	', amount: 21, currency: 'USD', percentOff: '100%'},       
      ];

      getCoupons(){
          return this.COUPONS_DATA.slice();
      }
      
}