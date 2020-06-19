import { Component, OnInit, Inject } from '@angular/core';
import {ContactsService} from '../admincontacts/admincontacts.service'
import { ProgressSpinnerMode } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
declare var angular: any;

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  selected= 'option2';
  contacts:any;
  screenWidth: number;

  mode: ProgressSpinnerMode = 'determinate';
  showSpinner = false;
  contactsEmpty= true;

  constructor(private contactsService: ContactsService, private auth:AuthService) {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.showSpinner = true;
    this.mode = 'indeterminate';
    this.auth.getAllSystemUsers().subscribe((response: any) => {
      if (response.success) {
        this.showSpinner = false;
        this.mode = 'determinate';
        if (response.data.length > 0) {
          this.contactsEmpty = false;
        }
        this.contacts = response.data;
        this.contacts.slice(0,3)
      } else {
        this.showSpinner = false;
        this.mode = 'determinate';
      }
    });
  }

}



angular.module('app', ['chart.js']);

angular.module('app')
  .controller('MyController', function ($scope, $timeout) {
    $scope.labels = ["08/08/2019", "08/09/2019", "08/12/2019", "08/13/2019", "08/15/2019", "08/23/2019", "08/24/2019"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40, 66],
      [28, 48, 40, 19, 86, 27, 90, 55]
    ];
    $scope.onClick = function (points, evt) {  
      console.log(points, evt);
    };

    // Simulate async data update
    $timeout(function () {
      $scope.data = [
        [28, 48, 40, 19, 86, 27, 90, 76],
        [65, 59, 80, 81, 56, 55, 40, 45]
      ];
    }, 3000);
  });

angular.element(document).ready(function(){
  angular.bootstrap(document, ['app']);
});



