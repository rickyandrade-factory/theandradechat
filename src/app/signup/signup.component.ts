import { Component, OnInit } from '@angular/core';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import {AuthService} from '../services/auth.service';
import { User } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: {}

  constructor(private auth: AuthService, public user: User, public router: Router) { }

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
  registerUser(event) {
    event.preventDefault();
    let userData = this.validateData();
    if (userData) {
      userData.status = 1;
      this.auth.registerUser(userData);
    } else {
      console.log(this.errorMessage);
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateData() {
    const fullname = event.target.querySelector('#fullname').value;
    const email = event.target.querySelector('#email').value;
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    const cpassword = event.target.querySelector('#cpassword').value;
    let userData = {
      firstname: String,
      lastname: String,
      email: String,
      username: String,
      password: String,
      status: Number,
    };

    if (fullname) {
      let name = fullname.split(" ", 2);
      userData.firstname = name[0];
      if (name.length > 1) {
        userData.lastname = name[1];
      }
    } else {
      this.errorMessage = {message: "Please enter a valid fullname"}
      return false;
    }

    if (this.validateEmail(email)) {
      userData.email = email;
    } else {
      this.errorMessage = {message: "Please enter a valid email"}
      return false;
    }
    if (username) {
      userData.username = username;
    } else {
      this.errorMessage = {message: "Please enter a valid username"}
      return false;
    }
    if (password && cpassword && password == cpassword) {
      userData.password = password;
    } else {
      this.errorMessage = {message: "Password does not match"}
      return false;
    }
    return userData;
  }

}
