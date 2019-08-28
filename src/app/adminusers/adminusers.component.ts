import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';

import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import { NewUserComponent } from './new-user.component';


export interface UserData {
  name: string;
  progress: string;
  color: string;
  seen: string;
  empty: string;
  registered: string;
  devices: string;
  Subscription: string;
  img: string;
  username: string;
  email: string;
  type: string;
  verified: string;

}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --',
  '-- never --', '-- never --', '-- never --', '-- never --', '-- never --'
];

const SEEN: string[] = [
  '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --',
  '-- never --', '-- never --', '-- never --', '-- never --', '-- never --'
];
const EMPTY: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const SUBSCRIPTION: string[] = [
  'sdMaibas', 'Ashsesr', 'Olbivqisa', 'Atsticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Islas', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const REGISTERED: string[] = [
  '08/08/2019', '08/08/2019', '08/08/2019', '08/08/2019', '08/08/2019', '08/08/2019','08/08/2019','08/08/2019','08/08/2019','08/08/2019','08/08/2019',
  '08/08/2019','08/08/2019','08/08/2019','08/08/2019','08/08/2019','08/08/2019','08/08/2019','08/08/2019','08/08/2019','08/08/2019','08/08/2019'
];
const DEVICES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const IMG: string[] = [
  'sdMaia', 'Ashesr', 'Olivisa', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const TYPE: string[] = [
  'User', 'User','User','User','User','User','User','User','User','User','User','User','User','User',
  'User','User','User','User','User','User','User','User','User','User','User'
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
const VERIFIED: string[] = [
  'sdMaia', 'Ashesr', 'Olivisa', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
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
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {


  displayedColumns: string[] = ['img', 'username', 'email', 'verified', 'subscription', 'type',  'devices', 'registered', 'seen', 'empty'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  version = VERSION;

  fileNameDialogRef: MatDialogRef<NewUserComponent>;

  

  files = [
    { name: 'foo.js', content: ''},
    { name: 'bar.js', content: ''}
  ];
  
  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(NewUserComponent);
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
    seen: SEEN[Math.round(Math.random() * (COLORS.length - 1))],
    empty: EMPTY[Math.round(Math.random() * (COLORS.length - 1))], 
    registered: REGISTERED[Math.round(Math.random() * (COLORS.length - 1))], 
    devices: DEVICES[Math.round(Math.random() * (COLORS.length - 1))],
    Subscription: SUBSCRIPTION[Math.round(Math.random() * (COLORS.length - 1))],
    type: TYPE[Math.round(Math.random() * (COLORS.length - 1))],
    img: IMG[Math.round(Math.random() * (COLORS.length - 1))],
    username: USERNAME[Math.round(Math.random() * (COLORS.length - 1))],
    email: EMAIL[Math.round(Math.random() * (COLORS.length - 1))],
    verified: VERIFIED[Math.round(Math.random() * (COLORS.length - 1))]
  };
}