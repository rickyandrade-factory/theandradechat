import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_user_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button  mat-dialog-close  class="close">
             <span aria-hidden="true">×</span>
         </button>
         Add Contact
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
        <div class="row">
          <div class="col-xs-12">
            <mat-form-field>
                <input matInput placeholder="Full Name">
            </mat-form-field>
          </div>
        </div>
        <div class="row">    
            <div class="col-sm-6">
               <mat-form-field>
                  <input matInput placeholder="Email">
               </mat-form-field>
            </div>
            <div class="col-sm-6">
               <mat-form-field>
                  <input matInput placeholder="Username">
               </mat-form-field>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6">
               <mat-form-field>
                  <mat-select placeholder="Role">
                     <mat-option value="Admin">Admin</mat-option>
                     <mat-option value="Instructor">Instructor</mat-option>
                     <mat-option value="Moderator">Moderator</mat-option>
                     <mat-option value="User">User</mat-option>
                  </mat-select>
                  <mat-hint>
                     <a href="#" class="">
                           <i class="fa fa-info-circle"></i>
                     </a>
                  </mat-hint>
               </mat-form-field>
            </div>
            <div class="col-sm-6">
                  <mat-form-field>
                      <input matInput placeholder="Password">
                  </mat-form-field>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6">
                  <mat-form-field>
                      <input matInput placeholder="Repeat Password">
                  </mat-form-field>
            </div>
            <div class="col-sm-6">
            <div class="checkbox">
               <label>
               <input type="checkbox" class=""> Send a welcome email
               </label>
            </div>
          </div> 
         </div>
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" mat-dialog-close  class="btn btn-default pull-left" type="button" >Cancel</button>
         <button class="btn btn-blue">Create</button>
      </div>
   </form>
</div>
  `
})
export class NewContactComponent {

}

