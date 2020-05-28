import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { VERSION, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  template: `
  <div class="modal-content new_user_dialog chatroom_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button type="button" class="close" aria-label="Close">
         <span aria-hidden="true" (click)="closeDialog()">×</span>
         </button>
         # New Chatroom
      </h4>
   </div>
   <form [formGroup]= "newChatRoom" (ngSubmit)="createChatRoom()">
      <div class="modal-body wrap-div">
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Name" value="" formControlName="title" name="title" style="cursor: text;" required>
              </mat-form-field>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Descriptions" value="" formControlName="description" name="description" style="cursor: text;" required>
              </mat-form-field>
          </div>
      </div>
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <mat-label>Type</mat-label>
                    <mat-select [(value)]="status" formControlName="status">
                        <mat-option value="public">Public - The room is accessible to everybody</mat-option>
                        <mat-option value="premium">Premium - The room is associated with at least one billing plan</mat-option>
                        <mat-option value="private">Private - Only selected users have access</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
            <h5>Options</h5>
                    <mat-checkbox formControlName="is_visible" >The room is visible -</mat-checkbox>
                        <span class="text-muted">
                            <i>The room is displayed on the left sidebar</i>
                        </span>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
            <h5>Who is able to post messages:</h5>
                <mat-radio-group aria-label="Select an option" formControlName="post_access">
                    <mat-radio-button class="wrap-div " value="1">everyone</mat-radio-button>
                    <mat-radio-button class="wrap-div" value="2"> only admins/moderators/instructors</mat-radio-button>
                    <mat-radio-button class="wrap-div" value="3"> only admins/moderators/instructors and premium users</mat-radio-button>
                </mat-radio-group>
            </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" class="btn btn-default pull-left" type="button" (click)="closeDialog()">Cancel</button>
         <button class="btn btn-blue">Create</button>
      </div>
   </form>
</div>
  `
})

export class NewChatroomComponent {
  status = 'type1';
  errorMessage = {};
  newChatRoom = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
    status: new FormControl(""),
    is_visible: new FormControl(true),
    post_access: new FormControl("")
  })

  constructor(private auth: AuthService, private dialogRef: MatDialog) { }

  createChatRoom() {
    console.log(this.newChatRoom.value);
    let chatRoomData = this.validate();
    if (chatRoomData) {
      this.auth.createNewRoom(this.newChatRoom.value).subscribe((data) => {
        if (data && data.hasOwnProperty('success')) {
          console.log("room created", data);
          this.dialogRef.closeAll();
          location.reload();
        } else {
          this.dialogRef.closeAll();
        }
      }
      );
    } else {
      console.log("validation failed...", this.errorMessage);
    }
  }
  closeDialog() {
    this.dialogRef.closeAll();
  }

  validate() {
    let data = this.newChatRoom.value;
    if (!data.title) {
      this.errorMessage = { message: "Please enter a valid room title" }
      return false;
    }
    if (!data.description) {
      this.errorMessage = { message: "Please enter a valid room description" }
      return false;
    }
    if (!data.status) {
      this.errorMessage = { message: "Please set a valid room type" }
      return false;
    }
    if (!data.post_access) {
      this.errorMessage = { message: "Please set a valid postAccess for the room" }
      return false;
    }
    return true;
  }
}
