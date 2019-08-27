import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';



// export class AdminpaymentsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


export interface UserData {
  name: string;
  progress: string;
  color: string;
  status: string;
  description: string;
  date: string;
  username: string;
  email: string;
  amount: string;
  plan: string;

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
const DESCRIPTION: string[] = [
  'MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569',
  'MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569','MMA +1-916-836-4569'
];

const STATUS: string[] = [
  'FAILED','FAILED','FAILED','SUCCEED','FAILED','SUCCEED','FAILED','FAILED','FAILED','SUCCEED','FAILED','SUCCEED','FAILED','FAILED','FAILED','SUCCEED','FAILED','SUCCEED',
  'FAILED','FAILED','FAILED','SUCCEED','FAILED','SUCCEED','FAILED','FAILED','FAILED','SUCCEED','FAILED','SUCCEED','FAILED','FAILED','FAILED','SUCCEED','FAILED','SUCCEED'
];
const DATE: string[] = [
  '2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18',
  '2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18','2019-05-05 00:54:18'
];
const AMOUNT: string[] = [
  '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', 
  '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00', '88.00', '24.00','65.00', '89.00','43.00', '54.00','88.00', '23.00'
];

const USERNAME: string[] = [
  '_sdMaia23', '_Ashesr12', 'Olivisa_1', '123Atticus', '324Amelia', 'J34ack', '2121Charlotte', '54232', '.Isla', 'Oliver',
  'Isabella', '_Jasper', 'Cora', 'Levi', '.Violet', 'Arthur', 'Mia', 'Thomas', '.12Elizabeth'
];
const EMAIL: string[] = [
  'its.ronaldo1@gmail.com', 'emmanuel.wediko@gmail.com', 'robertbaconfitness@yahoo.com', 'tremonrobinson32@gmail.com', 'tremonrobinson32@gmail.com', 'robertbaconfitness@yahoo.com', 
  'tremonrobinson32@gmail.com', 'rtgbrt34@yahoo.com', 'tremonrobinson32@gmail.com', 'robertbaconfitness@yahoo.com', 'its.ronaldo1@gmail.com',
   'robertbaconfitness@yahoo.com', 'its.ronaldo1@gmail.com', 'Levi', 'tremonrobinson32@gmail.com', 'rtgbrt34@yahoo.com',
    'its.ronaldo1@gmail.com	', 'rtgbrt34@yahoo.com	', 'its.ronaldo1@gmail.com'
]; 
const PLAN: string[] = [
  'OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial',
  'OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial','OPFX $77/mo 7 Day Trial'
]



/**
 * @title Data table with sorting, pagination, and filtering.
 */ 
// @Component({
//   selector: 'table-overview-example',
//   styleUrls: ['table-overview-example.css'],
//   templateUrl: 'table-overview-example.html',
// })

@Component({
  selector: 'app-adminpayments',
  templateUrl: './adminpayments.component.html',
  styleUrls: ['./adminpayments.component.css']
})
export class AdminpaymentsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'username', 'email', 'plan', 'description', 'amount',  'status'];
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
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    status: STATUS[Math.round(Math.random() * (COLORS.length - 1))],
    description: DESCRIPTION[Math.round(Math.random() * (COLORS.length - 1))],
    amount: AMOUNT[Math.round(Math.random() * (COLORS.length - 1))],
    date: DATE[Math.round(Math.random() * (COLORS.length - 1))],
    username: USERNAME[Math.round(Math.random() * (COLORS.length - 1))],
    email: EMAIL[Math.round(Math.random() * (COLORS.length - 1))],
    plan: PLAN[Math.round(Math.random() * (COLORS.length - 1))]
  };
}