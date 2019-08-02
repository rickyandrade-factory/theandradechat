import { HttpService } from '../services/http.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

export class User {
  constructor( public session: SessionStorageService) { }

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
    return localStorage.getItem(HttpService.localStorageUserName);
  }

  getLoginUserId() {
    if(this.getLoginUser()) {
      return JSON.parse(this.getLoginUser()).id;
    }
    return false;
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

  setLoginUser(user, expired: number = 0) {
    localStorage.setItem(HttpService.localStorageUserName, JSON.stringify(user));
  }

  get() {
    return localStorage.getItem(HttpService.localStorageUserName);
  }

  clear() {
    localStorage.clear();
  }

  logout() {
    console.log('-------logging-out');
    localStorage.removeItem(HttpService.localStorageUserName);
  }
}
