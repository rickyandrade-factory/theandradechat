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
    return localStorage.getItem(HttpService.localStorageUserName) ? localStorage.getItem(HttpService.localStorageUserName).toString() : localStorage.getItem(HttpService.localStorageUserName);
  }

  getLoginUserId() {
    if (this.getLoginUser() === "undefined" || !this.getLoginUser()) {
      return false;
    } else {
      return JSON.parse(this.getLoginUser()).id;
    }
  }

  getUserChatId() {
    if (this.getLoginUser() === "undefined" || !this.getLoginUser()) {
      return false;
    } else {
      console.log(JSON.parse(this.getLoginUser()), "JSON.parse(this.getLoginUser())");
      return JSON.parse(this.getLoginUser()).chat_id;
    }
  }

  getLoginUserRole() {
    if (this.getLoginUser() === "undefined" || !this.getLoginUser()) {
      return false;
    } else {
      return JSON.parse(this.getLoginUser()).role_id;
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

  setLoginUser(response) {
    localStorage.setItem(HttpService.localStorageUserName, JSON.stringify(response.data));
    localStorage.setItem(HttpService.localStorageAccessToken, response.token);
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
