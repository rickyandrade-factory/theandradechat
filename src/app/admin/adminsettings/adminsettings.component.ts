import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { CustomScriptComponent } from './custom-script.component';
import { LocalStorageService } from 'angular-web-storage';
import { NewAvatarService } from './new-avatar.service';
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


  constructor(private dialog: MatDialog,
    private localStorage: LocalStorageService,
    private newAvatarService: NewAvatarService){
    this.adminImgPath = this.localStorage.get('admin_user_profile');
  }
  adminImgPath;


  ngOnInit() {
    this.newAvatarService.newAvatar.subscribe(
      () => {
        this.adminImgPath= this.localStorage.get('admin_user_profile');
      }
    )
  }

}

// new avatar dialog
@Component({
  selector: 'new-teamavatar',
  templateUrl: './new-teamavatar.dialog.html',
  styleUrls: ['./adminsettings.component.css']
})
export class NewTeamAvatarDialog implements OnInit {
  constructor(private localStorage: LocalStorageService, private newAvatarService: NewAvatarService){
    this.adminImgPath = this.localStorage.get('admin_user_profile');
  }
 ngOnInit(){
   
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
      this.newAvatarService.newAvatar.next(true);
    };
  }
}
