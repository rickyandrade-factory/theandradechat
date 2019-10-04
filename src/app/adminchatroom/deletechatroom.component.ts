import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_user_dialog chatroom_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button type="button" class="close" aria-label="Close">
         <span aria-hidden="true" (click)="closeDialog()">×</span>
         </button>
         # {{room.title}}
      </h4>
   </div>
   <div class="modal-body wrap-div">
      <div class="row">
          <div class="col-xs-12">
              <p>Are your sure you want to delete Room : <b>{{room.title}}</b></p>
              <p>Once you delete the room, it cannot be recovered and you will loose all the data in the room, including messages, photos, links and other media content.</p>
              <p>Are you sure?</p>
          </div>
      </div>
   </div>
    <div class="modal-footer wrap-div">
        <button autofocus="" class="btn btn-default pull-left" type="button" (click)="closeDialog()">Cancel</button>
        <button (click)="deleteChatRoom()" class="btn btn-blue">Confirm Delete</button>
    </div>
</div>
  `
})

export class DeleteChatroomComponent implements OnInit {

  room: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialog,
    private auth: AuthService
  ) {
    console.log(this.data);
    this.room = this.data
  }

  ngOnInit() { }

  deleteChatRoom() {
    console.log(this.data);
    this.auth.deleteChatRoom(this.data._id);
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }
}
