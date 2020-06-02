import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { VERSION, MatDialog, MatDialogRef } from '@angular/material';
import { NewChatroomComponent } from './new-cahtroom.component';
import { DeleteChatroomComponent } from './deletechatroom.component';
import { AuthService } from '../../services/auth.service';

import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { ChatRoomService } from './adminchatroom.service';
import {ChatRoomsInterface } from './adminchatroom.interface';

@Component({
  selector: 'app-adminchatroom',
  templateUrl: './adminchatroom.component.html',
  styleUrls: ['./adminchatroom.component.css']
})

export class AdminchatroomComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  showSpinner= false;
  
  displayedColumns: string[] = ['name', 'description', 'type', 'plan', 'coupon', 'sort', 'checkout', 'alter'];
  rooms = []
  dataSource= new MatTableDataSource<ChatRoomsInterface>(this.chatRoomService.getChatRooms());
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  version = VERSION;
  createRoomDialogRef: MatDialogRef<NewChatroomComponent>;
  deleteRoomDialogRef: MatDialogRef<DeleteChatroomComponent>;
  editRoomDialogRef: MatDialogRef<NewChatroomComponent>
  constructor(private dialog: MatDialog, private auth: AuthService,
    private chatRoomService: ChatRoomService) {
 
  }

  openAddFileDialog() {
    this.createRoomDialogRef = this.dialog.open(NewChatroomComponent);
    this.createRoomDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  deleteRoom(room) {
    this.deleteRoomDialogRef = this.dialog.open(DeleteChatroomComponent, {
      data: room
    });
  }
  editRoom(room) {
    this.editRoomDialogRef = this.dialog.open(NewChatroomComponent);
  }

  getCoupons(coupon){
    console.log(coupon);
    if(coupon && coupon.length > 0){
      return JSON.stringify(coupon);
    }else{
      return 'N/A';
    }
  }

  ngOnInit() {
    this.auth.getRoomsList().subscribe((response: any) => {
      if (response.hasOwnProperty("success") && response.hasOwnProperty("data")) {
        this.rooms = response.data;
      }else{
        this.rooms = [];
      }
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // onrefresh
  onRefresh(){
    console.log('it isw')
    this.showSpinner= true;
    this.mode = 'indeterminate';
    setTimeout(() => {
      this.mode = 'determinate';
      this.showSpinner= false;
    }, 1000)
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

