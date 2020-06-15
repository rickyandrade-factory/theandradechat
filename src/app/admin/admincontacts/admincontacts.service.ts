import { Injectable } from '@angular/core';
import { ContactsInterface } from './admincontacts.interface';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    private _url: string = "../../assets/data";

    // CONTACTS_DATA: ContactsInterface[] = [
    //     { imgPath: '//cdn.echofin.co/avatars/f02df689.png', 
    //       fullname: 'aman singh', 
    //       email: '', 
    //       phoneNumber: '', 
    //       subscription: '', 
    //       type: '', 
    //       deviceNumber: '', 
    //       registered: ' 2020-04-11 10:15:11', 
    //       lastActivity: '' 
    //     }
    // ];

    constructor(private http: HttpService, private auth: AuthService) { }



    getContacts() {
        // return this.auth.getAllSystemUsers();
        // return this.http.get<ContactsInterface[]>(this._url + '/data.json');
    }

    // errHandler(error: HttpErrorResponse){
    //     return Observable.throw(error.message || "server error");
    // }

}