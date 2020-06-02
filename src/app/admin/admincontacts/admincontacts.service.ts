import { Injectable } from '@angular/core';
import { ContactsInterface } from './admincontacts.interface';
@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    CONTACTS_DATA: ContactsInterface[] = [
        { imgPath: '', 
          fullname: ' aman singh', 
          email: '', 
          phoneNumber: '', 
          subscription: '', 
          type: '', 
          deviceNumber: '', 
          registered: '', 
          lastActivity: '' 
        },
    ];

    getContacts() {
        return this.CONTACTS_DATA.slice();
    }

}