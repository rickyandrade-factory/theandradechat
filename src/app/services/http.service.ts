import { Injectable } from '@angular/core';
import { User } from '../models/index';
import { AppConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  public static localStorageUserName = 'login_user';
  public static localStorageAllRooms = 'all_rooms';

  public user: User;

  public appConfig: any = {};

  // tslint:disable-next-line: variable-name
  public access_token_auth = true;

  constructor(public config: AppConfig, private http: HttpClient) {
    this.appConfig = this.config.getConfig();
  }

  static getAuthUser() {
    // return new User().getLoginUser();
  }

  /**
   * Constructs a `POST` request that interprets the body as a
   * JSON object and returns the response body as a JSON object.
   *
   * @param url The endpoint URL.
   * @param body The content to replace with.
   * @param options HTTP options
   *
   * @return An `Observable` of the response, with the response body as a JSON object.
   */
  getUserDetails(params) {
    return this.http.post(this.getEndPoint('loginUser', 'POST'), params);
  }

  registerUser(params) {
    return this.http.post(this.getEndPoint('registerUser', 'POST'), params);
  }

  createNewRoom(params) {
    return this.http.post(this.getEndPoint('createNewRoom', 'POST'), params);
  }

  getRoomsList() {
    return this.http.post(this.getEndPoint('allRoomsList', 'POST'), {});
  }

  deleteChatRoom(roomId) {
    console.log("deleteChatRoom::", roomId)
    return this.http.post(this.getEndPoint('deleteChatRoom', 'POST'), roomId);
  }

  // tslint:disable-next-line: variable-name
  getEndPoint(string: string, method: string, queryParam: string = '') {
    console.log(this.getBaseUrl() + this.getApiEndPoint(string));
    if (method === 'GET') {
      return this.getBaseUrl() + this.getApiEndPoint(string) + '?' + queryParam;
    }
    return this.getBaseUrl() + this.getApiEndPoint(string);
  }

  getBaseUrl() {
    return this.appConfig.apiUrl;
  }

  getCommonEndPoints() {
    return {
      loginUser: 'api/login',
      registerUser: 'api/register',
      allRoomsList: 'api/rooms',
      deleteChatRoom: 'api/deleteroom',
      createNewRoom: 'api/createroom'
    };
  }

  getApiEndPoint(str: string) {
    // tslint:disable-next-line: variable-name
    const end_points = this.getCommonEndPoints();
    if (end_points[str] != null) { return end_points[str]; }
    throw new Error(' No end point find with name ' + str);
  }

}
