import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatarea',
  templateUrl: './chatarea.component.html',
  styleUrls: ['./chatarea.component.css']
})
export class ChatareaComponent implements OnInit {

  // constructor() { }

    screenWidth: number;

    constructor() {
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        this.screenWidth = window.innerWidth;
      };
    }

  ngOnInit() {
  }

}
