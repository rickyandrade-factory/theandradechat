import { Injectable } from '@angular/core';
import {ChatRoomsInterface} from './adminchatroom.interface';
@Injectable({
    providedIn: 'root'
})
export class ChatRoomService{

     ROOMS_DATA: ChatRoomsInterface[] = [
        {name: 'market-masters', description: 'desc', type: 'public', plan: 'usd', coupon: 'N/A', sort: ''}
      ];

      getChatRooms(){    
          return this.ROOMS_DATA.slice();
      }
      
}