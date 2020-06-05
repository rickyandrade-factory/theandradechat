import { Component, OnInit, Inject } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { NewAvatarService } from '../adminsettings/new-avatar.service';
import { MatDialog } from '@angular/material';
import { NewTeamAvatarDialog } from '../adminsettings/adminsettings.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  adminImgPath;
  blackTheme;
  constructor( private localStorage: LocalStorageService,
    private dialog: MatDialog,
     private newAvatarService: NewAvatarService,
     @Inject(DOCUMENT) private document: Document) {
    this.adminImgPath= this.localStorage.get('admin_user_profile');
   }

   onBlackTheme(){
    if(this.blackTheme == true){
      this.localStorage.set("Admintheme", false);
      this.document.body.classList.remove('black-theme');
    }
    else{
      this.localStorage.set("Admintheme", true);
      this.document.body.classList.add('black-theme');
    }
  }

   openteamavatar() {
    const fileNameDialogRef = this.dialog.open(NewTeamAvatarDialog);
  }

  ngOnInit() {

    this.blackTheme= this.localStorage.get('Admintheme');
    if(this.blackTheme == true){
      this.document.body.classList.add('black-theme');
    }
    else{
      this.document.body.classList.remove('black-theme');
    }

    this.newAvatarService.newAvatar.subscribe(
      data => {
        this.adminImgPath= this.localStorage.get('admin_user_profile');
      }
    )
  }

}
