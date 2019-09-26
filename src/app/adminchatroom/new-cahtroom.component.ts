import { Component } from '@angular/core';
@Component({
  template: `
  <div class="modal-content new_user_dialog chatroom_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button type="button" class="close" aria-label="Close">
         <span aria-hidden="true">×</span>
         </button>
         # New Chatroom
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Name *" value=""> 
              </mat-form-field>
          </div>
      </div>    
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Description *" value=""> 
              </mat-form-field>
          </div>
      </div>  
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <mat-label>Type</mat-label>
                    <mat-select [(value)]="type">
                        <mat-option value="type1">Public - The room is accessible to everybody</mat-option>
                        <mat-option value="type2">Premium - The room is associated with at least one billing plan</mat-option>
                        <mat-option value="type3">Private - Only selected users have access</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
            <h5>Options</h5>
                    <mat-checkbox>The room is visible -</mat-checkbox> 
                        <span class="text-muted">
                            <i>The room is displayed on the left sidebar</i>
                        </span>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
            <h5>Who is able to post messages:</h5>
                <mat-radio-group aria-label="Select an option">
                    <mat-radio-button class="wrap-div " value="1">everyone</mat-radio-button>
                    <mat-radio-button class="wrap-div" value="2"> only admins/moderators/instructors</mat-radio-button>
                    <mat-radio-button class="wrap-div" value="3"> only admins/moderators/instructors and premium users</mat-radio-button>
                </mat-radio-group>
            </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" class="btn btn-default pull-left" type="button">Cancel</button>
         <button class="btn btn-blue">Create</button>
      </div>
   </form>
</div>
  `
}) 

export class NewChatroomComponent {
    type= 'type1';
}