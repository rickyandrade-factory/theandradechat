import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { CustomScriptComponent } from './custom-script.component';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-adminsettings',
  templateUrl: './adminsettings.component.html',
  styleUrls: ['./adminsettings.component.css']
})
export class AdminsettingsComponent implements OnInit {
  openteamavatar() {
    const fileNameDialogRef = this.dialog.open(NewTeamAvatarDialog);
  }

  openscript() {
    const fileNameDialogRef = this.dialog.open(CustomScriptComponent);
  }
  onProfile(){
    const fileNameDialogRef = this.dialog.open(ProfileDialog, {
      width: '600px',
    });
  }

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
  }

}

// profile dialog
@Component({
  selector: 'profile-dialog',
  templateUrl: './profile.dialog.html',
  styleUrls: ['./adminsettings.component.css']
})
export class ProfileDialog {}

// new avatar dialog
@Component({
  selector: 'new-teamavatar',
  templateUrl: './new-teamavatar.dialog.html',
  styleUrls: ['./adminsettings.component.css']
})
export class NewTeamAvatarDialog {
  constructor(private localStorage: LocalStorageService){
    this.adminImgPath = this.localStorage.get('admin_user_profile');
  }
  adminImgPath;
  preview(files) {
    if (files.length === 0)
      return;
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.adminImgPath = reader.result;
      this.localStorage.set("admin_user_profile", this.adminImgPath);
    };
  }
}
