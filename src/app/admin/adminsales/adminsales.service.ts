import { Injectable } from '@angular/core';
import {SalesInterface} from './adminsales.interface';
@Injectable({
    providedIn: 'root'
})
export class SalesService{

     SALES_DATA: SalesInterface[] = [
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'Johan' , email: 'johan@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-342-3422', amount: 23423, status:'Failed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Failed'},
        {date: '2020-05-04', username: 'monu' , email: 'monu@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Failed'},
        {date: '2020-05-04', username: 'karamjot' , email: 'karamjot@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Failed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Failed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Failed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},
        {date: '2020-05-04', username: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'},

      ];

      getSalesData(){
          return this.SALES_DATA.slice();
      }
      
}