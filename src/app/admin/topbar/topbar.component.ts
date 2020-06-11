import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LocalStorageService } from 'angular-web-storage';
import { NewAvatarService } from '../adminsettings/new-avatar.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  user: string;
  constructor(private userService: UserService ,private authService: AuthService ,private dialog: MatDialog) { }

  ngOnInit() {
    this.user= this.userService.getUser();
  }

  onProfile(){
    const fileNameDialogRef = this.dialog.open(ProfileDialog, {
      width: '600px',
    });
  }

  logout() {
    this.authService.logout();
  }

}

// profile dialog
@Component({
  selector: 'profile-dialog',
  templateUrl: './profile.dialog.html',
  styleUrls: ['./topbar.component.css']
})
export class ProfileDialog implements OnInit {
  user: string;
 ELEMENT_DATA = [
    // {plan: '7 Day Trial', trial: '', CC: '', period: '2020-06-12', canceled: 'NO'},
  ];
  
  displayedColumns: string[] = ['plan', 'trial', 'CC', 'period', 'canceled'];
  dataSource = this.ELEMENT_DATA;

  constructor(private userService: UserService ,private localStorage: LocalStorageService, private newAvatarService: NewAvatarService){
    this.adminImgPath= this.localStorage.get('admin_user_profile');
  }
  ngOnInit(){
    this.user= this.userService.getUser();
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