import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css']
})
export class ProfileSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.btnClose').click(function(){
      $('.card_box').toggleClass('show_hide');
    });
    $('.panelUser').click(function(){
      $('.card_box').toggleClass('show_hide');
    });
  }

}
