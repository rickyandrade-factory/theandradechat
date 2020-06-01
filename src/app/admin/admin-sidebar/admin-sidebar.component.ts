import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { NewAvatarService } from '../adminsettings/new-avatar.service';
import { MatDialog } from '@angular/material';
import { NewTeamAvatarDialog } from '../adminsettings/adminsettings.component';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  adminImgPath;
  constructor( private localStorage: LocalStorageService,
    private dialog: MatDialog,
     private newAvatarService: NewAvatarService) {
    this.adminImgPath= this.localStorage.get('admin_user_profile');
   }

   openteamavatar() {
    const fileNameDialogRef = this.dialog.open(NewTeamAvatarDialog);
  }

  ngOnInit() {
    this.newAvatarService.newAvatar.subscribe(
      data => {
        this.adminImgPath= this.localStorage.get('admin_user_profile');
      }
    )
  }

}
