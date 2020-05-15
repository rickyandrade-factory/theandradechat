import { Component, OnInit } from '@angular/core';
declare var angular: any;

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  selected= 'option2';
  
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



