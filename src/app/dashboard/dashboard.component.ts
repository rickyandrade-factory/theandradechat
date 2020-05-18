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

  openMarketHoursDialog() {
    const dialog = this.dialog.open(MarketHoursDialog, {
        width: '738px'
      }
    );
  }

  openFXHeatmapDialog() {
    const dialog = this.dialog.open(FXHeatmapDialog, {
        width: '780px'
      }
    );
  }

  openCoin360Dialog() {
    const dialog = this.dialog.open(Coin360Dialog, {
        width: '880px'
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

// Market Hours Dialog
@Component({
  selector: 'market-hours-dialog',
  templateUrl: 'market-hours-dialog.html',
})
export class MarketHoursDialog {}

// FX Heatmap Dialog
@Component({
  selector: 'fx-heatmap-dialog',
  templateUrl: 'fx-heatmap-dialog.html',
})
export class FXHeatmapDialog {}

// COIN360 Dialog
@Component({
  selector: 'coin-360-dialog',
  templateUrl: 'coin-360-dialog.html',
})
export class Coin360Dialog {}
