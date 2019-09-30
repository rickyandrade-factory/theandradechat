import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * {
	"firstname":"tarun",
	"lastname":"jangra",
	"username":"tarun",
	"email":"tarun",
	"password": "123",
	"status": 0

}
   */
  registerUser(event){
    event.preventDefault();
  }
}
