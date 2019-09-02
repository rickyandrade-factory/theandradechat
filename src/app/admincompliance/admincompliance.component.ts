import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
//import { NewCouponsComponent } from './new-coupons.component';

export interface UserData {
  name: string;
  color: string;
  report: string;
  user: string;
  ip: string;
  date: string;
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

const REPORT: string[] = [
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
  'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM',   'Generate messages for room Traders Lounge from 1/31/18 12:00 AM to 2/7/18 11:59 PM', 
];
const USER: string[] = [
  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',
  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',
  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',
  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',
  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',
  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',  'justin@marketmastersacademy.com',
];
const IP: string[] = [
  '68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114',
  '68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114',
  '68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114',
  '68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114','68.41.253.114',
];
const DATE: string[] = [
  'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   
  'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',  'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	', 
  'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	', 
  'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',   'Feb 8, 2018 2:39:51 PM	',  
]



@Component({
  selector: 'app-admincompliance',
  templateUrl: './admincompliance.component.html',
  styleUrls: ['./admincompliance.component.css']
})

export class AdmincomplianceComponent implements OnInit {
  displayedColumns: string[] = ['date',  'user', 'ip', 'report'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
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
    report: REPORT[Math.round(Math.random() * (COLORS.length - 1))],
    user: USER[Math.round(Math.random() * (COLORS.length - 1))],
    ip: IP[Math.round(Math.random() * (COLORS.length - 1))],
    date: DATE[Math.round(Math.random() * (COLORS.length - 1))]
  };
}