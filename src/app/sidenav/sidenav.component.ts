import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  } 

  logout() {
    this.auth.logout();
  }
}