import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { VERSION, MatDialog, MatDialogRef } from '@angular/material';
import { NewChatroomComponent } from './new-cahtroom.component';
import { DeleteChatroomComponent } from './deletechatroom.component';
import { AuthService } from '../services/auth.service';


export interface UserData {
  name: string;
  color: string;
  checkout: string;
  alter: string;
  plan: string;
  coupon: string;
  sort: string;
  date: string;
  description: string;
  type: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --',
  '-- never --', '-- never --', '-- never --', '-- never --', '-- never --'
];

const NAMES: string[] = [
  'On Point FX Signals', 'On-Point FX Signals 7-Day FREE ', 'Private Forex Mentoring', '7-Day INTENSIVE Private Forex Training', 'On Point FX Signals (Telegram)', 'On Point FX Signals 7-Days FREE and then $57/mo',
  'On Point FX Signals', 'On-Point FX Signals 7-Day FREE ', 'Private Forex Mentoring', '7-Day INTENSIVE Private Forex Training', 'On Point FX Signals (Telegram)', 'On Point FX Signals 7-Days FREE and then $57/mo',
  'On Point FX Signals', 'On-Point FX Signals 7-Day FREE ', 'Private Forex Mentoring', '7-Day INTENSIVE Private Forex Training', 'On Point FX Signals (Telegram)', 'On Point FX Signals 7-Days FREE and then $57/mo',
  'On Point FX Signals', 'On-Point FX Signals 7-Day FREE ', 'Private Forex Mentoring', '7-Day INTENSIVE Private Forex Training', 'On Point FX Signals (Telegram)', 'On Point FX Signals 7-Days FREE and then $57/mo',
  'On Point FX Signals', 'On-Point FX Signals 7-Day FREE ', 'Private Forex Mentoring', '7-Day INTENSIVE Private Forex Training', 'On Point FX Signals (Telegram)', 'On Point FX Signals 7-Days FREE and then $57/mo',
  'On Point FX Signals', 'On-Point FX Signals 7-Day FREE ', 'Private Forex Mentoring', '7-Day INTENSIVE Private Forex Training', 'On Point FX Signals (Telegram)', 'On Point FX Signals 7-Days FREE and then $57/mo'
];
const SORT: string[] = [
  '1', '1', '29', '1', '28', '1', '1', '12', '1', '21', '1', '1', '29', '1', '28', '1', '1', '12', '1', '21', '1', '1', '29', '1', '28', '1', '1', '12', '1', '21'
];

const CHECCKOUT: string[] = [
  'Month', 'Forever', 'Month', 'Month', 'Forever', 'Forever', 'Month', 'Forever', 'Month', 'Forever', 'Month', 'Month', 'Forever', 'Forever', 'Month', 'Forever',
  'Month', 'Forever', 'Month', 'Month', 'Forever', 'Forever', 'Month', 'Forever', 'Month', 'Forever', 'Month', 'Month', 'Forever', 'Forever', 'Month', 'Forever',
  'Month', 'Forever', 'Month', 'Month', 'Forever', 'Forever', 'Month', 'Forever'
];
const ALTER: string[] = [
  'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)', 'PayPal (rickytheinvestor@gmail.com)'
];
const PLAN: string[] = [
  'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD',
  'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD'
];
const COUPON: string[] = [
  '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00', '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00', '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00',
  '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00', '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00'
];
const DATE: string[] = [
  '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18',
  '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18'
];
const DESCRIPTION: string[] = [
  'Access our 7-Day INTENSIVE Private Forex Training resources.',
  'All features FREE for 7-Days and then $97/mo.', 'Test', 'Transfer your existing subscription to our new platform', '$97/month for FULL ACCESS. Cancel at anytime.',
  'Access our 7-Day INTENSIVE Private Forex Training resources.',
  'All features FREE for 7-Days and then $97/mo.', 'Test', 'Transfer your existing subscription to our new platform', '$97/month for FULL ACCESS. Cancel at anytime.',
  'Access our 7-Day INTENSIVE Private Forex Training resources.',
  'All features FREE for 7-Days and then $97/mo.', 'Test', 'Transfer your existing subscription to our new platform', '$97/month for FULL ACCESS. Cancel at anytime.',
  'Access our 7-Day INTENSIVE Private Forex Training resources.',
  'All features FREE for 7-Days and then $97/mo.', 'Test', 'Transfer your existing subscription to our new platform', '$97/month for FULL ACCESS. Cancel at anytime.',
  'Access our 7-Day INTENSIVE Private Forex Training resources.',
  'All features FREE for 7-Days and then $97/mo.', 'Test', 'Transfer your existing subscription to our new platform', '$97/month for FULL ACCESS. Cancel at anytime.'
];
const TYPE: string[] = [
  'NO', 'NO', 'YES', 'NO', 'NO', 'YES', 'NO', 'NO', 'YES', 'NO', 'NO', 'YES', 'NO', 'NO', 'YES', 'NO', 'NO', 'YES', 'NO', 'NO', 'YES', 'NO', 'NO', 'YES', 'NO', 'NO', 'YES',
  'NO', 'NO', 'YES', 'NO', 'NO', 'YES', 'NO', 'NO', 'YES', 'NO', 'NO', 'YES'
]

@Component({
  selector: 'app-adminchatroom',
  templateUrl: './adminchatroom.component.html',
  styleUrls: ['./adminchatroom.component.css']
})

export class AdminchatroomComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'type', 'plan', 'coupon', 'sort', 'checkout', 'alter'];
  rooms = []
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  version = VERSION;
  createRoomDialogRef: MatDialogRef<NewChatroomComponent>;
  deleteRoomDialogRef: MatDialogRef<DeleteChatroomComponent>;

  constructor(private dialog: MatDialog, private auth: AuthService) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  openAddFileDialog() {
    this.createRoomDialogRef = this.dialog.open(NewChatroomComponent);
    this.createRoomDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  deleteRoom(room) {
    this.deleteRoomDialogRef = this.dialog.open(DeleteChatroomComponent, {
      data: room
    });
  }

  getCoupons(coupon){
    console.log(coupon);
    if(coupon && coupon.length > 0){
      return JSON.stringify(coupon);
    }else{
      return 'N/A';
    }
  }

  ngOnInit() {
    this.auth.getRoomsList().subscribe((response) => {
      if (response.hasOwnProperty("success") && response.hasOwnProperty("data")) {
        this.rooms = response.data;
      }else{
        this.rooms = [];
      }
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    name: name,
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    checkout: CHECCKOUT[Math.round(Math.random() * (COLORS.length - 1))],
    alter: ALTER[Math.round(Math.random() * (COLORS.length - 1))],
    plan: PLAN[Math.round(Math.random() * (COLORS.length - 1))],
    coupon: COUPON[Math.round(Math.random() * (COLORS.length - 1))],
    sort: SORT[Math.round(Math.random() * (COLORS.length - 1))],
    date: DATE[Math.round(Math.random() * (COLORS.length - 1))],
    description: DESCRIPTION[Math.round(Math.random() * (COLORS.length - 1))],
    type: TYPE[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
