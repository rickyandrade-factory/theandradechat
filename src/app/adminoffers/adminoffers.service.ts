import { Injectable } from '@angular/core';
import { OffersInterface } from './adminoffers.interface';
@Injectable({
    providedIn: 'root'
})
export class OffersService{

     OFFERS_DATA: OffersInterface[] = [
        {username: 'wayne' ,    email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial',  startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Drepress' , email: 'depress@gmail.com', plan: 'OPFX Recurly',           startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Darell' ,   email: 'darell@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'wayne' ,    email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial',  startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Drepress' , email: 'depress@gmail.com', plan: 'OPFX Recurly',           startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Darell' ,   email: 'darell@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'wayne' ,    email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial',  startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Drepress' , email: 'depress@gmail.com', plan: 'OPFX Recurly',           startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Darell' ,   email: 'darell@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'wayne' ,    email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial',  startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Drepress' , email: 'depress@gmail.com', plan: 'OPFX Recurly',           startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Darell' ,   email: 'darell@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'wayne' ,    email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial',  startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Drepress' , email: 'depress@gmail.com', plan: 'OPFX Recurly',           startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},
        {username: 'Darell' ,   email: 'darell@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'},

      ];

      getOffers(){
          return this.OFFERS_DATA.slice();
      }
      
}