import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models';
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
  rooms: [];
  fileNameDialogRef: MatDialogRef<lockeddialogComponent>;
  socket: SocketIOClient.Socket;
  public appConfig: any = {};
  private user: User;
  private fullnameq;

  files = [
    { name: 'foo.js', content: '' },
    { name: 'bar.js', content: '' }
  ];
  constructor(private dialog: MatDialog, private config: AppConfig, private auth: AuthService) {
    this.appConfig = this.config.getConfig();
    this.socket = io.connect(this.appConfig.apiUrl);
    // this.user = JSON.parse(this.user.get());
    // this.fullname = JSON.parse(this.user.get());
  }

  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(lockeddialogComponent);
  }

  ngOnInit() {
    if (this.user) {
      this.rooms = JSON.parse(this.user.getRooms());
      console.log(this.rooms);
      // const joiningRoom = this.user.rooms.find((element) => {
      //   return element.isActive;
      // });
      // this.socket.on('historyCatchUp', (data: any) => {
      // });
      // this.socket.emit('joinRoom', joiningRoom.roomUsername, newNumberOfMembers => {
      //   console.log(newNumberOfMembers);
      // });
      // this.socket.emit('event1', {msg: 'Client to server, can you hear me server?'});
    }

  }

  logout() {
    this.auth.logout();
  }
}
