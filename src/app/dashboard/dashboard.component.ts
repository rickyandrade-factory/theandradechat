import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';
import { User } from '../models';
import { MatDialog } from '@angular/material';
import {ConfiguredialogComponent} from '../admin/adminwidget/configure-dialog.component';
import {AdminWidgetService} from '../admin/adminwidget/adminwidget.service';
import { LocalStorageService } from 'angular-web-storage';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  darkTheme= false;
  chartsDisable;
  screenWidth: number;
  roomTitle: String;
  isAdmin = false;
  userService: UserService;


  ngOnInit(){
  }
  


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private socketService: SocketService,
    public user: User,
    userService: UserService,
    public dialog: MatDialog,
    private adminWidgetService: AdminWidgetService,
    private localStorage: LocalStorageService
  ) {
    this.chartsDisable= this.localStorage.get('widget');
    this.userService = userService;
    this.socketService.initSocket();
    this.isAdmin = this.userService.userIsAdmin();
    console.log(`this.isAdmin: ${this.isAdmin}`);
    this.document.body.classList.remove('black-theme');

    //for mat-drawer responsive
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  onRedirectAdmin(){
    this.router.navigate(['admin/dashboard']);
    this.document.body.classList.remove('dark-theme');
  }
  openChartsDialog() {
    const dialog = this.dialog.open(ChartsDialog);
  }

  openMarketHoursDialog() {
    const dialog = this.dialog.open(MarketHoursDialog);
  }

  openFXHeatmapDialog() {
    const dialog = this.dialog.open(FXHeatmapDialog);
  }

  openCoin360Dialog() {
    const dialog = this.dialog.open(Coin360Dialog);
  }

  openLiveTVDialog() {
    const dialog = this.dialog.open(LiveTVDialog);
  }

  openFXCrossRatesDialog(){
    const dialog = this.dialog.open(FXCrossRatesDialog);
  }

  openOtherChartDialog(){
    const dialog = this.dialog.open(OtherChartDialog);
  }

  openZoomDialog(){
    const dialog = this.dialog.open(ZoomDialog);
  }

  openDataFlashDialog(){
    const dialog = this.dialog.open(DataFlashDialog);
  }

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

// LIVE TV Dialog
@Component({
  selector: 'live-tv-dialog',
  templateUrl: 'live-tv-dialog.html',
})
export class LiveTVDialog {}

// FX Cross Rates Dialog 
@Component({
  selector: 'fx-cross-rates-dialog',
  templateUrl: 'fx-cross-rates-dialog.html',
})
export class FXCrossRatesDialog {}

// Other Chart Dialog
@Component({
  selector: 'other-chart-dialog',
  templateUrl: 'other-chart-dialog.html',
})
export class OtherChartDialog {}

// zoom Dialog
@Component({
  selector: 'zoom-dialog',
  templateUrl: 'zoom-dialog.html',
})
export class ZoomDialog {}

// data flash Dialog
@Component({
  selector: 'data-flash-dialog',
  templateUrl: 'data-flash-dialog.html',
})
export class DataFlashDialog {}