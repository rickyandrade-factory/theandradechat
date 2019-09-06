import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';

export interface UserData {
  name: string;
  progress: string;
  color: string;
  devices: string;
  user: string;
  sessions: string;
  ip: string;

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
const DEVICES: string[] = [
  '1 Devices',  '2 Devices',  '1 Devices',  '2 Devices',  '1 Devices',  '1 Devices',  '1 Devices',  '1 Devices',  '1 Devices',
  '1 Devices',  '2 Devices',  '1 Devices',  '2 Devices',  '1 Devices',  '1 Devices',
];

const USER: string[] = [
  'puneetsethi25',  'puneetsethi25',  ' kuldeepspall231',  'puneetsethi25',  'tarunjangra3223',  'puneetsethi25',  'kuldeepspall231', 
  'tarunjangra3223',  'puneetsethi25',  'kuldeepspall231',  'puneetsethi25',  'mohitkumar23',  'puneetsethi25',  'tarunjangra3223',
];

const SESSIONS: string[] = [
  '1 sessions',   '1 sessions',   '2 sessions',   '4 sessions',   '3 sessions',   '5 sessions',   '2 sessions',   '2 sessions', 
  '2 sessions',   '5 sessions',   '5 sessions',   '5 sessions',   '5 sessions',   '5 sessions',   '5 sessions',   '5 sessions', 
];
const IP: string[] = [
  '2 ips',  '1 ips',  '3 ips',  '2 ips',  '3 ips',  '3 ips',  '3 ips',  '3 ips',  '3 ips',  '3 ips',  '3 ips',  '3 ips',  '3 ips',
  '3 ips',  '3 ips',  '3 ips',  '3 ips',  '3 ips',  '3 ips',  '2 ips',  '3 ips',
]

@Component({
  selector: 'app-adminonlineativity',
  templateUrl: './adminonlineativity.component.html',
  styleUrls: ['./adminonlineativity.component.css']
})
export class AdminonlineativityComponent implements OnInit {
  displayedColumns: string[] = ['empty', 'user', 'activesessions', 'sessions', 'ip', 'devices'];
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
    devices: DEVICES[Math.round(Math.random() * (COLORS.length - 1))],
    user: USER[Math.round(Math.random() * (COLORS.length - 1))],
    sessions: SESSIONS[Math.round(Math.random() * (COLORS.length - 1))],
    ip: IP[Math.round(Math.random() * (COLORS.length - 1))]
  };
}







