

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';

import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import { WithdrawOptionComponent } from './withdraw-option.component';
import { ViewPaymentComponent } from './view-payment.component';




export interface UserData {
  name: string;
  progress: string;
  color: string;
  statusdate: string;
  canceled: string;
  details: string;
  balance: string;
  status: string;
  comment: string;
  date: string;
  requestdate: string;      
  grossamount: string;
  netamount: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --',
  '-- never --', '-- never --', '-- never --', '-- never --', '-- never --'
];

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const COMMENT: string[] = [

];

const STATUSDATE: string[] = [
  '2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00',
  '2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00'
];
const DETAILS: string[] = [
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)'
];
const BALANCE: string[] = [
  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',
  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00',  '0.00'
];
const STATUS: string[] = [
  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',
  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED',  'ACCEPTED'
];
const DATE: string[] = [
  '2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18',
  '2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18'
];
const CANCELED: string[] = [
  '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', 
  '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00'
];

const REQUESTDATE: string[] = [
  '2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00',
  '2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00','2019-03-22 19:54:00'
];
const GROSSAMOUNT: string[] = [
  '128.00', '24.00','65.00', '879.00','43.00', '54.00','879.00', '456.00', '21.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '890.00','43.00', '54.00','88.00', '23.00', 
  '88.00', '24.00','65.00', '89.00','465.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','123.00', '54.00','88.00', '23.00'  
]; 
const NETAMOUNT: string[] = [
  '828.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', 
  '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00'  
]



@Component({
  selector: 'app-adminpayouts',
  templateUrl: './adminpayouts.component.html',
  styleUrls: ['./adminpayouts.component.css']
})
export class AdminpayoutsComponent implements OnInit {
  displayedColumns: string[] = ['requestdate', 'grossamount', 'netamount',  'balance', 'status', 'comment',  'statusdate', 'details'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  version = VERSION;

  fileNameDialogRef: MatDialogRef<WithdrawOptionComponent>;

  

  files = [
    { name: 'foo.js', content: ''},
    { name: 'bar.js', content: ''}
  ];
  
  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(WithdrawOptionComponent);
  }

  openpayment() {
    this.fileNameDialogRef = this.dialog.open(ViewPaymentComponent);
  }

  constructor(private dialog: MatDialog) {
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
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    canceled: CANCELED[Math.round(Math.random() * (COLORS.length - 1))],
    statusdate: STATUSDATE[Math.round(Math.random() * (COLORS.length - 1))],
    details: DETAILS[Math.round(Math.random() * (COLORS.length - 1))],
    balance: BALANCE[Math.round(Math.random() * (COLORS.length - 1))],
    status: STATUS[Math.round(Math.random() * (COLORS.length - 1))],
    comment: COMMENT[Math.round(Math.random() * (COLORS.length - 1))],
    date: DATE[Math.round(Math.random() * (COLORS.length - 1))],
    requestdate: REQUESTDATE[Math.round(Math.random() * (COLORS.length - 1))],
    grossamount: GROSSAMOUNT[Math.round(Math.random() * (COLORS.length - 1))],
    netamount: NETAMOUNT[Math.round(Math.random() * (COLORS.length - 1))]
  };
}