import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { AuthService } from '../services/auth.service';
import { User } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: {}
  useData = new FormGroup({
    fullname: new FormControl(""),
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    cpassword: new FormControl("")
  })


  constructor(private auth: AuthService, public user: User, public router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    let userData = this.validateData();
    if (userData) {
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
    let userData = this.useData.value;
    var procesData = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      status: 1,
    };
    if (userData.fullname) {
      let name = userData.fullname.split(" ", 2);
      procesData.firstname = name[0];
      if (name.length > 1) {
        procesData.lastname = name[1];
      }
    } else {
      this.errorMessage = { message: "Please enter a valid fullname" }
      return false;
    }

    if (this.validateEmail(userData.email)) {
      procesData.email = userData.email;
    } else {
      this.errorMessage = { message: "Please enter a valid email" }
      return false;
    }
    if (userData.username) {
      procesData.username = userData.username;
    } else {
      this.errorMessage = { message: "Please enter a valid username" }
      return false;
    }
    if (userData.password && userData.cpassword && userData.password == userData.cpassword) {
      procesData.password = userData.password;
    } else {
      this.errorMessage = { message: "Password does not match" }
      return false;
    }
    return procesData;
  }

}
