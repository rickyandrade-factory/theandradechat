import { Injectable } from '@angular/core';
import { ContactsInterface } from './admincontacts.interface';
@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    CONTACTS_DATA: ContactsInterface[] = [
        // { imgPath: '//cdn.echofin.co/avatars/f02df689.png', 
        //   fullname: 'aman singh', 
        //   email: '', 
        //   phoneNumber: '', 
        //   subscription: '', 
        //   type: '', 
        //   deviceNumber: '', 
        //   registered: ' 2020-04-11 10:15:11', 
        //   lastActivity: '' 
        // }
    ];

    getContacts() {
        return this.CONTACTS_DATA.slice();
    }

}