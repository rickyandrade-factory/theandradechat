import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-unlockchatroom',
  templateUrl: './unlockchatroom.component.html',
  styleUrls: ['./unlockchatroom.component.css']
})
export class UnlockchatroomComponent implements OnInit {
  public appConfig: any = {};
  socket: SocketIOClient.Socket;

  constructor(private config: AppConfig ) {
    this.appConfig = this.config.getConfig();
    this.socket = io.connect(this.appConfig.apiUrl);
  }

  ngOnInit() {
  }

}
