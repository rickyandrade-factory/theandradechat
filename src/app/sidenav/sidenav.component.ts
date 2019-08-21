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



// import {Component, Inject} from '@angular/core'; 
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */

// export class DialogDataExample {
//   constructor(public dialog: MatDialog) {}

//   openDialog() {
//     this.dialog.open(DialogExampleComponent, {
//       data: {
//         animal: 'panda'
//       }
//     });
//   }
// }


// export class DialogExampleComponent {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }