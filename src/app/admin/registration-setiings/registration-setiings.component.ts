import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-setiings',
  templateUrl: './registration-setiings.component.html',
  styleUrls: ['./registration-setiings.component.css']
})
export class RegistrationSetiingsComponent implements OnInit {

  RegistrationList: string[] = ['Phone Number', 'Country', 'State', 'City', 'Date Of Birth'];
  
  constructor() { }

  ngOnInit() {
  }

}
