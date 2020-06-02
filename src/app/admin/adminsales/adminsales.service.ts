import { Injectable } from '@angular/core';
import {SalesInterface} from './adminsales.interface';
@Injectable({
    providedIn: 'root'
})
export class SalesService{

     SALES_DATA: SalesInterface[] = [
         {date: '2020-05-04', fullname: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'}

      ];

      getSalesData(){
          return this.SALES_DATA.slice();
      }
      
}