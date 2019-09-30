import { Component, OnInit, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  screenWidth: number;
  roomTitle: String;

  constructor(
    private socketService: SocketService
  ) {
    this.socketService.initSocket();
  }

  ngOnInit() {}

  setRoomTitle(roomTitle){
    console.log(`roomTitle: ${roomTitle}`);
    this.roomTitle = roomTitle;
  }
}


