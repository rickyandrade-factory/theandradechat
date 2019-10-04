import { HttpService } from '../services/http.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

export class User {
  constructor() { }

  providerId: string;
  accessToken: string;
  tokenType: string;
  expires: string;
  expiresIn: number;
  refreshToken: string;
  id: string;
  userEmail: string;
  userFirstname: string;
  userLastname: string;
  avatar: any;
  photoUrl: string;

  country: string;

  getLoginUser() {
    return localStorage.getItem(HttpService.localStorageUserName).toString();
  }

  getLoginUserId() {
    // if (this.getLoginUser() && this.getLoginUser() != undefined) {
    if (this.getLoginUser() === "undefined" || !this.getLoginUser()) {
      return false;
    } else {
      return JSON.parse(this.getLoginUser())._id;
    }
  }

  getUserRole() {
    if (this.getLoginUser()) {
      return JSON.parse(this.getLoginUser()).status;
    }
    return false;
  }

  userIsAdmin() {
    if (this.getLoginUser()) {
      return (JSON.parse(this.getLoginUser()).status == 1 ? true : false);
    }
    return false;
  }

  getUser() {
    return JSON.parse(this.getLoginUser());
  }
  getFirstName() {
    return JSON.parse(this.getLoginUser()).userFirstname;
  }

  getLastName() {
    return JSON.parse(this.getLoginUser()).userLastname;
  }

  getFullName() {
    return JSON.parse(this.getLoginUser()).userFirstname + ' ' + JSON.parse(this.getLoginUser()).userLastname;
  }

  setLoginUser(user) {
    localStorage.setItem(HttpService.localStorageUserName, JSON.stringify(user));
  }

  get() {
    return localStorage.getItem(HttpService.localStorageUserName);
  }

  setAllRooms(rooms) {
    localStorage.setItem(HttpService.localStorageAllRooms, JSON.stringify(rooms));
  }

  getRooms() {
    return JSON.parse(localStorage.getItem(HttpService.localStorageAllRooms));
  }

  clear() {
    localStorage.clear();
  }

  logout() {
    localStorage.clear();
    localStorage.removeItem(HttpService.localStorageUserName);
  }
}
