import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';

import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import { NewCouponsComponent } from './new-coupons.component';

import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

export interface UserData {
  name: string;
  color: string;
  alter: string;
  currency: string;
  percentoff: string;
  amount: string;
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

const ALTER: string[] = [
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',
  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)',  'PayPal (rickytheinvestor@gmail.com)'
];
const CURRENCY: string[] = [
  'USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD',
  'USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD','USD'
];
const PERCENTOFF: string[] = [
'0%', '100%', '100%', '0%','0%', '100%', '100%', '0%','0%', '100%', '100%', '0%','0%', '100%', '100%', '0%','0%', '100%', '100%', '0%','0%', '100%', '100%', '0%',
'0%', '100%', '100%', '0%','0%', '100%', '100%', '0%','0%', '100%', '100%', '0%','0%', '100%', '100%', '0%','0%', '100%', '100%', '0%',
'0%', '100%', '100%', '0%','0%', '100%', '100%', '0%','0%', '100%', '100%', '0%','0%', '100%', '100%', '0%'
];
const AMOUNT: string[] = [
  '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', 
  '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00'
]



@Component({
  selector: 'app-admincoupons',
  templateUrl: './admincoupons.component.html',
  styleUrls: ['./admincoupons.component.css']
})

export class AdmincouponsComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  showSpinner= false;
  filterActive= false;
  displayedColumns: string[] = ['name', 'amount',  'currency', 'percentoff', 'alter'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  version = VERSION;

  fileNameDialogRef: MatDialogRef<NewCouponsComponent>;
  
  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(NewCouponsComponent);
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

  // onrefresh
  onRefresh(){
    console.log('it isw')
    this.showSpinner= true;
    this.mode = 'indeterminate';
    setTimeout(() => {
      this.mode = 'determinate';
      this.showSpinner= false;
    }, 1000)
  }

    // filter
    onActiveFilter(){
      this.filterActive= !this.filterActive;
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
    alter: ALTER[Math.round(Math.random() * (COLORS.length - 1))],
    currency: CURRENCY[Math.round(Math.random() * (COLORS.length - 1))],
    percentoff: PERCENTOFF[Math.round(Math.random() * (COLORS.length - 1))],
    amount: AMOUNT[Math.round(Math.random() * (COLORS.length - 1))]
  };
}