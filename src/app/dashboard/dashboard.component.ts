import {Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
