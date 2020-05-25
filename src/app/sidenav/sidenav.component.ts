import { Component, OnInit, Inject, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { VERSION, MatDialog, MatDialogRef } from '@angular/material';
import { lockeddialogComponent } from './locked-dialog.component';
import { SocketService } from '../services/socket.service';
import { LocalStorageService } from 'angular-web-storage';
declare var $:any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  imgURL;
  version = VERSION;
  rooms = [];
  roomId: any = ""
  ioConnection: any;
  userService: UserService;
  authService: AuthService;
  @Output() selectedRoom: EventEmitter<any> = new EventEmitter<any>();
  public auth: AuthService;
  public user: any = {
    firstname: String,
    lastname: String
  };

  constructor(userService: UserService, authService: AuthService,
     private socketService: SocketService,
     public dialog : MatDialog,
     private localstorage: LocalStorageService) {
    this.imgURL = this.localstorage.get('imgURL');
    this.auth = authService;
    this.userService = userService;
  }

  onManageBrockerDialog(){
    const dialog = this.dialog.open(ManageBrockersDialog, {
      width: '900px',
    });
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  openAddFileDialog() {
    const fileNameDialogRef = this.dialog.open(lockeddialogComponent);
  }
  openPreferencesDialog(){
    const dialogRef = this.dialog.open(PreferencesDialog, {
      width: '650px',
    });

  }

  clickRoom(room) {
    if (room.status == 'private') {
      this.openAddFileDialog();
    } else {
      this.socketService.joinRoom(room._id);
      this.selectedRoom.emit(room.title);
    }
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.rooms = this.userService.getRooms();
    console.log(this.rooms);
    console.log(this.user);
    if (this.rooms.length > 0) {
      this.roomId = this.rooms[0]._id;
      this.socketService.joinRoom(this.rooms[0]._id);
      this.selectedRoom.emit(this.rooms[0].title);
    }
  }

  ngAfterViewInit() {
    $('.rooms_list a').click(function(){
      $('.rooms_list a').removeClass('active');
      $(this).addClass('active');
    });
  }

  logout() {
    this.auth.logout();
  }


}

// manage Brockers (webtraser add)
@Component({
  selector: 'manage-brockers-dialog',
  templateUrl: 'manage-brockers-dialog.html',
  styleUrls: ['./sidenav.component.css']
})
export class ManageBrockersDialog {
  addOwn: boolean= false;
  addFromList: boolean= true;
  onClickOwn(){
    this.addOwn= false;
    this.addFromList = true;
  }
  onClickList(){
    this.addFromList= false;
    this.addOwn= true;
  }
}

// preferences dialog
@Component({
  selector: 'preferences-dialog',
  templateUrl: 'preferences-dialog.html',
  styleUrls: ['./sidenav.component.css']
})
export class PreferencesDialog{
  profile:boolean= true;
  notification:boolean;
  blockMute:boolean;
  billing:boolean;
  advanced:boolean;

  constructor(private localstorage: LocalStorageService){
    this.imgURL = this.localstorage.get('imgURL');
  }
  ngOnChanges() {
  }
  onProfile(){
    this.profile= true;
    this.notification= false;
    this.blockMute= false;
    this.billing= false;
    this.advanced= false;
  }
  onNotification(){
    this.profile= false;
    this.notification= true;
    this.blockMute= false;
    this.billing= false;
    this.advanced= false;
  }
  onBlockMute(){
    this.profile= false;
    this.notification= false;
    this.blockMute= true;
    this.billing= false;
    this.advanced= false;
  }
  onBilling(){
    this.profile= false;
    this.notification= false;
    this.blockMute= false;
    this.billing= true;
    this.advanced= false;
  }
  onAdvanced(){
    this.profile= false;
    this.notification= false;
    this.blockMute= false;
    this.billing= false;
    this.advanced= true;
  }

  // upload
  imgURL;
  preview(files) {
    if (files.length === 0)
      return;
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.localstorage.set("imgURL", this.imgURL);
      this.ngOnChanges();
    };
  }
}