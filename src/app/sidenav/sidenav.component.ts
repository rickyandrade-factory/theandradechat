import { Component, OnInit, Inject, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import * as io from 'socket.io-client';
import { AppConfig } from '../app.config';


import { VERSION, MatDialog, MatDialogRef } from '@angular/material';
import { lockeddialogComponent } from './locked-dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  version = VERSION;
  @Input() rooms: [];
  fileNameDialogRef: MatDialogRef<lockeddialogComponent>;
  socket: SocketIOClient.Socket;
  public appConfig: any = {};
  dialog: MatDialog;
  public auth: AuthService;
  public user: any = {
    firstname: String,
    lastname: String
  };

  constructor(
    config: AppConfig,
    userService: UserService,
    authService: AuthService
  ) {
    this.appConfig = config.getConfig();
    this.socket = io.connect(this.appConfig.apiUrl);
    this.rooms = userService.getRooms();
    this.user = userService.getUser();
    this.auth = authService;
  }

  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(lockeddialogComponent);
  }

  ngOnInit() {

  }

  logout() {
    this.auth.logout();
  }
}
