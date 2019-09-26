import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from '../services/auth.service';
import { User } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, public user: User, public router: Router) { }

  ngOnInit() {
    if (this.user.getLoginUserId()) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser(event) {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    this.auth.loginUser(username, password);
  }

}
