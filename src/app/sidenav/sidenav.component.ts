import { Component, OnInit, Inject, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { VERSION, MatDialog, MatDialogRef } from '@angular/material';
import { lockeddialogComponent } from './locked-dialog.component';
import { SocketService } from '../services/socket.service';
declare var $:any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  version = VERSION;
  rooms = [];
  roomId: any = ""
  ioConnection: any;
  userService: UserService;
  authService: AuthService;
  @Output() selectedRoom: EventEmitter<any> = new EventEmitter<any>();
  fileNameDialogRef: MatDialogRef<lockeddialogComponent>;
  dialog: MatDialog;
  public auth: AuthService;
  public user: any = {
    firstname: String,
    lastname: String
  };

  constructor(userService: UserService, authService: AuthService, private socketService: SocketService) {
    this.auth = authService;
    this.userService = userService;
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(lockeddialogComponent);
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
