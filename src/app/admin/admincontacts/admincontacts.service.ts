import { Injectable } from '@angular/core';
import { ContactsInterface } from './admincontacts.interface';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import {map} from 'rxjs/operators'
@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    private _url:string = "../../assets/data";

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

    constructor(private http: HttpClient){
    }

     fetchPosts(): Observable<ContactsInterface[]> {
        return this.http
          .get('https://durable-tangent-260506.firebaseio.com/data.json')
          .pipe(
            map(responseData => {
              const postsArray = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({ ...responseData[key], id: key });
                }
              }
              return postsArray;
            })
          )
      }


    deleteContacts(id: any){
       return this.http.delete('https://durable-tangent-260506.firebaseio.com/data.json', id);
    }
    

}