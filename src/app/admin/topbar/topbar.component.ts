import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LocalStorageService } from 'angular-web-storage';
import { NewAvatarService } from '../adminsettings/new-avatar.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onProfile(){
    const fileNameDialogRef = this.dialog.open(ProfileDialog, {
      width: '600px',
    });
  }

}

// profile dialog
@Component({
  selector: 'profile-dialog',
  templateUrl: './profile.dialog.html',
  styleUrls: ['./topbar.component.css']
})
export class ProfileDialog implements OnInit {
 ELEMENT_DATA = [
    {plan: '7 Day Trial', trial: '', CC: '', period: '2020-06-12', canceled: 'NO'},
  ];
  
  displayedColumns: string[] = ['plan', 'trial', 'CC', 'period', 'canceled'];
  dataSource = this.ELEMENT_DATA;

  constructor(private localStorage: LocalStorageService, private newAvatarService: NewAvatarService){
    this.adminImgPath= this.localStorage.get('admin_user_profile');
  }
  ngOnInit(){
    this.newAvatarService.newAvatar.subscribe(
      newPath => {
        this.adminImgPath= this.localStorage.get('admin_user_profile');
      }
      
    )
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