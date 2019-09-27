import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import * as io from 'socket.io-client';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  rooms: []
  screenWidth: number;
  socket: SocketIOClient.Socket;

  constructor(
    config: AppConfig,
    userService: UserService,
  ) {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => { this.screenWidth = window.innerWidth; };

    this.appConfig = config.getConfig();
    this.socket = io.connect(this.appConfig.apiUrl);
    this.rooms = userService.getRooms();
  }
  ngOnInit() { }

}


