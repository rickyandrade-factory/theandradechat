import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NewAvatarService{
 newAvatar= new Subject<boolean>();
}