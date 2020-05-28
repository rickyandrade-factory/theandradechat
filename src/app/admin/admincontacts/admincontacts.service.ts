import { Injectable } from '@angular/core';
import {ContactsInterface} from './admincontacts.interface';
@Injectable({
    providedIn: 'root'
})
export class ContactsService{

     CONTACTS_DATA: ContactsInterface[] = [
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'test1234', email: 'test1234@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'Admin', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'karuna123', email: 'karuna1234@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'mehakapur', email: 'mehakapur123@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 1, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'demouser', email: 'demo123@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'test1234', email: 'test1234@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'Admin', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'karuna123', email: 'karuna1234@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 1, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'mehakapur', email: 'mehakapur123@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'demouser', email: 'demo123@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'test1234', email: 'test1234@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'Admin', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'karuna123', email: 'karuna1234@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'mehakapur', email: 'mehakapur123@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'demouser', email: 'demo123@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'test1234', email: 'test1234@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'Admin', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'karuna123', email: 'karuna1234@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'mehakapur', email: 'mehakapur123@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},
        {imgPath: '//cdn.echofin.co/avatars/a16ea39c.png', username: 'demouser', email: 'demo123@gmail.com' , phoneNumber: 8928738218, subscription: '', type: 'User', deviceNumber: 2, registered: '2020-04-11', lastActivity: '2020-02-12'},

      ];

      getContacts(){
          return this.CONTACTS_DATA.slice();
      }
      
}