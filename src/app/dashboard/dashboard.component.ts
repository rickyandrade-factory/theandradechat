import { Component, OnInit, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';
import { User } from '../models';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  screenWidth: number;
  roomTitle: String;
  isAdmin = false;
  userService: UserService;

  constructor(
    private socketService: SocketService,
    public user: User,
    userService: UserService,
    public dialog: MatDialog
  ) {
    this.userService = userService;
    this.socketService.initSocket();
    this.isAdmin = this.userService.userIsAdmin();
    console.log(`this.isAdmin: ${this.isAdmin}`);

    //for mat-drawer responsive
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  openChartsDialog() {
    const dialog = this.dialog.open(ChartsDialog, {
        width: '650px'
      }
    );

  }

  ngOnInit() { }

  setRoomTitle(roomTitle) {
    console.log(`roomTitle: ${roomTitle}`);
    this.roomTitle = roomTitle;
  }
}

// charts Dialog
@Component({
  selector: 'charts-dialog',
  templateUrl: 'charts-dialog.html',
})
export class ChartsDialog {}

