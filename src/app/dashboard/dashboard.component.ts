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

  // constructor() { }
  screenWidth: number;

constructor() {
  // set screenWidth on page load
  this.screenWidth = window.innerWidth;
  window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
  };
}
  ngOnInit() {}
  
}


