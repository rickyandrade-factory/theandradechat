import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  adminImgPath;
  constructor( private localStorage: LocalStorageService) {
    this.adminImgPath= this.localStorage.get('admin_user_profile');
   }

  ngOnInit() {
  }

}
