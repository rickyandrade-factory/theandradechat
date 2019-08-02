import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  $el: any;
  config: any;
  communities = [];
  community: any = {};
  navbarMenu: any;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  notificationsCounts: any = 0;
  allNotificationEvent: any;

  constructor() { }

  ngOnInit() {
  }

}
