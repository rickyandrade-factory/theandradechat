import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { OnpointRoomComponent } from '../onpoint-room/onpoint-room.component';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material';
import { LocalStorageService } from 'angular-web-storage';
import { PreferenceService } from '../sidenav/preferences.service';
declare var $:any;
@Component({
  selector: 'app-unlockchatroom',
  templateUrl: './unlockchatroom.component.html',
  styleUrls: ['./unlockchatroom.component.css']
})
export class UnlockchatroomComponent implements OnInit {
  adminImgPath;
  imgURL;
  ioConnection: any;
  messages: any = [];
  userId: String;
  @Input() selectedRoom: any = {
    _id: String
  };
  chat = {
    message: ""
  };
  constructor(private socketService: SocketService, userService: UserService,
    private dialog: MatDialog,
    private localstorage: LocalStorageService) {
    this.imgURL = this.localstorage.get('imgURL');
    this.userId = userService.getUserId();
    this.adminImgPath= this.localstorage.get('admin_user_profile');
  }

  ngOnInit(): void {
    this.socketService.onEvent("messageToClients").subscribe((message) => {
      this.messages.push(message.data);
    });
    this.socketService.onEvent('historyCatchUp').subscribe((response) => {
      this.messages = (response.hasOwnProperty('data') ? response.data : []);
    });
  }

  onUpload(event) {
    const dialog = this.dialog.open(MediaUploadDialog, {
      width: '598px',
    });
}

  openNewSignal() {
      const dialog = this.dialog.open(NewSignalDialog, {
        width: '598px',
      });
    }

  sendMessage(){
    if(this.chat.message){
      let msg = {
        text: this.chat.message,
        type: 0,
        senderId: this.userId
      }
      this.socketService.sendMessage(msg);
      this.chat.message = "";
    }
    
  }
}


// media upload
@Component({
  selector: 'media-upload-dialog',
  templateUrl: 'media-upload-dialog.html',
  styleUrls: ['./unlockchatroom.component.css']
})
export class MediaUploadDialog {}

// new Signal
@Component({
  selector: 'new-signal-dialog',
  templateUrl: 'new-signal-dialog.html',
  styleUrls: ['./unlockchatroom.component.css']
})

export class NewSignalDialog {
  ngAfterViewInit() {
    $('.editTitle').click(function(){
      $(this).prev().focus();
    });
    $('.btn-group p a.btn').click(function(){
      $('.btn-group p a.btn').removeClass('active');
      $(this).addClass('active');
    });

  }  
}