import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { OnpointRoomComponent } from '../onpoint-room/onpoint-room.component';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-unlockchatroom',
  templateUrl: './unlockchatroom.component.html',
  styleUrls: ['./unlockchatroom.component.css']
})
export class UnlockchatroomComponent implements OnInit {

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
    private dialog: MatDialog) {
    this.userId = userService.getUserId();
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