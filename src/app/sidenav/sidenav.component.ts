import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from '../services/auth.service';


import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import { lockeddialogComponent } from './locked-dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  version = VERSION;

  fileNameDialogRef: MatDialogRef<lockeddialogComponent>;

  

  files = [
    { name: 'foo.js', content: ''},
    { name: 'bar.js', content: ''}
  ];
  
  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(lockeddialogComponent);
  }

  constructor(private dialog: MatDialog) {}    
  // constructor(private auth: AuthService) { }

  ngOnInit() {
  } 

  // logout() {
  //   this.auth.logout();
  // }
}