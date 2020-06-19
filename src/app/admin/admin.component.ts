import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.sidebar-toggle').click(function(){
        $('.admin-dashboard').toggleClass('mini-sidebar');
    })
  }


}
