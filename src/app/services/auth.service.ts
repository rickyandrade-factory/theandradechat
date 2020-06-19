import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { User } from '../models';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable()
export class AuthService {

  USER_KEY = 'login_user';
  rooms = [
    {
      coupons: [],
      _id: "5d944c3c6bd7c7241e4472fb",
      title: "market-masters",
      status: "public",
      created_date: "2019-10-02T07:05:32.649Z",
    },
    {
      coupons: [],
      _id: "5d944c4a6bd7c7241e4472fc",
      title: "customers",
      status: "public",
      created_date: "2019-10-02T07:05:46.630Z",

    },
    {
      coupons: [],
      _id: "5d9745f3f1c0075164fb78dc",
      title: "Angular: Empty Fiddle",
      "description": "desc",
      status: "public",
      "post_access": 1,
      created_date: "2019-10-04T13:15:31.204Z",

    },
    {
      coupons: [],
      _id: "5eb9bfae11ea7133e7ff961a",
      title: "Test Chat",
      "description": "This is the chat to test out",
      status: "public",
      "post_access": 1,
      created_date: "2020-05-11T21:12:14.703Z",

    },
    {
      coupons: [],
      _id: "5ecd90cc11ea7133e7ff9662",
      title: "7 Day FX Mastery",
      "description": "7 day fx mastery",
      status: "public",
      "post_access": 1,
      created_date: "2020-05-26T21:57:32.772Z",

    },
    {
      coupons: [],
      _id: "5ed29d8a11ea7133e7ff9674",
      title: "Ricky test",
      "description": "test",
      status: "public",
      "post_access": 1,
      created_date: "2020-05-30T17:53:14.043Z",

    },
    {
      coupons: [],
      _id: "5ed54fc111ea7133e7ff967f",
      title: "Another test",
      "description": "test",
      status: "public",
      "post_access": 1,
      created_date: "2020-06-01T18:58:09.109Z",

    }
  ];
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

  get isAdmin() {
    return this.user.getLoginUserRole() == 1 ? true : false;
  }

  public createUserAdmin(data) {
    return this.http.createUserAdmin(data)
  }

  public registerUser(data) {
    return this.http.registerUser(data).subscribe((data) => {
      if (data && data.hasOwnProperty('success')) {
        this.loginSuccess(data);
      } else {
        this.loginFailed();
      }
    });
  }

  public createNewRoom(data) {
    return this.http.createNewRoom(data);
  }

  public deleteChatRoom(data) {
    return this.http.deleteChatRoom(data);
  }

  public getRoomsList() {
    return this.http.getRoomsList();
  }

  public loginUser(email, password) {
    return this.http.getUserDetails({ email, password });
  }

  public getAllSystemUsers() {
    return this.http.getAllSystemUsers();
  }

  public loginSuccess(user) {
    this.initlializeUser(user);
    // this.setAllRooms()
  }

  public initlializeUser(response) {
    this.user.setLoginUser(response);
    // this.setAllRooms();
    this.afterLogin();
  }

  public setAllRooms() {
    return this.http.getRoomsList()
  }
  public afterLogin() {
    this.router.navigate(['/dashboard']);
  }

  public loginFailed() {

  }
  public logout() {
    this.user.logout();
    this.router.navigate(['/login']);
  }
}
