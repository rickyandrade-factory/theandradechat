import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';
import { User } from '../models';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoading = false;
  public isValid = true;
  public incorrectLogin = false;
  public errorMessageEmail: any;
  public errorMessagePassword: any;
  public errorMessageLogin: any;
  public loginUseData = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private auth: AuthService, public user: User, public router: Router) { }

  ngOnInit() {
    if (this.user.getLoginUserId()) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser() {
    let userData = this.validateData();
    if (userData) {
      this.isLoading = true;
      this.auth.loginUser(userData.email, userData.password).subscribe((data: any) => {
        this.isLoading = false;
        if (data.success) {
          this.auth.loginSuccess(data);
        } else {
          this.loginFailed(data);
        }
      });
    } else {
      console.log(this.errorMessageLogin);
    }
  }

  loginFailed(data: any){
    this.incorrectLogin = true;
    this.errorMessageLogin = data.error;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateData() {
    let userData = this.loginUseData.value;
    var procesData = { email: "", password: "" };
    if (this.validateEmail(userData.email)) {
      procesData.email = userData.email;
      this.errorMessageEmail = false;
    } else {
      this.isValid = false;
      this.errorMessageEmail = "Please enter a valid email";
      return false;
    }
    if (userData.password) {
      this.errorMessagePassword = false;
      procesData.password = userData.password;
    } else {
      this.isValid = false;
      this.errorMessagePassword = "Password is required";
      return false;
    }

    return procesData;
  }

}
