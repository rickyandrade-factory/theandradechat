import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userModel: User;

  constructor(userModel: User) {
    this.userModel = userModel;
  }

  getUser() {
    return this.userModel.getUser();
  }

  getUserId() {
    return this.userModel.getLoginUserId();
  }

  userIsAdmin() {
    return this.userModel.userIsAdmin();
  }

  getRooms() {
    return this.userModel.getRooms();
  }

}
