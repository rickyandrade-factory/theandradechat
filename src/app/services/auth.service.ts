import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { User } from '../models';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  USER_KEY = 'login_user';

  constructor(
    private http: HttpService,
    public local: LocalStorageService,
    public session: SessionStorageService,
    public user: User,
    public router: Router
  ) { }

  get isLoggedIn() {
    return this.user.getLoginUserId() ? true : false;
  }

  public loginUser(username, password) {
    return this.http.getUserDetails({ username, password }).subscribe(
      data => {
        if (data && data.hasOwnProperty('success')) {
          this.loginSuccess(data);
        } else {
          this.loginFailed();
        }
      }
    );
  }

  public loginSuccess(user) {
    this.user.setLoginUser(user.data);
    this.afterLogin();
  }

  public afterLogin() {
    this.router.navigate(['/dashboard']);
  }
  public loginFailed() {

  }
  public logout() {
    this.user.logout();
    // this.router.navigate(['/login']);
  }
}