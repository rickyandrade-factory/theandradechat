import { Component, OnInit } from '@angular/core';
import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import { NewTeamAvatarComponent } from './new-teamavatar.component';
import { CustomScriptComponent } from './custom-script.component';
@Component({
  selector: 'app-adminsettings',
  templateUrl: './adminsettings.component.html',
  styleUrls: ['./adminsettings.component.css']
})
export class AdminsettingsComponent implements OnInit {

  version = VERSION;

  fileNameDialogRef: MatDialogRef<NewTeamAvatarComponent>;
  
  openteamavatar() {
    this.fileNameDialogRef = this.dialog.open(NewTeamAvatarComponent);
  }

  openscript() {
    this.fileNameDialogRef = this.dialog.open(CustomScriptComponent);
  }

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
  }

}
