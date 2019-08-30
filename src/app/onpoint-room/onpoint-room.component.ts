import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-onpoint-room',
  templateUrl: './onpoint-room.component.html',
  styleUrls: ['./onpoint-room.component.css']
})
export class OnpointRoomComponent implements OnInit {

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

  ngOnInit() {
  }

}
