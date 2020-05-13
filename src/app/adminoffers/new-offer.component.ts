import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_subs new_user_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
      </button> 
         Add Subscription
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
               <div class="checkbox">
                  <label>
                  <input type="checkbox" class=""> Mark email as verified
                  </label>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6">
               <mat-form-field>
                  <input matInput placeholder="Username">
               </mat-form-field>
            </div>
            <div class="col-sm-6">
               <div class="role">
                  <label>
                  Role
                  </label>
                  <button class="btn btn-xs btn-link btn-no-shadow" type="button" uib-popover-template="'users/_common/user-type-info.html'" popover-trigger="'mouseenter'" popover-class="popover-lg">
                  <span class="fa fa-info-circle fa-fw text-muted"></span>
                  </button>
               </div>
               <mat-form-field>
                  <mat-select placeholder="Select">
                     <mat-option value="option">Option</mat-option>
                  </mat-select>
               </mat-form-field>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6">
                  <mat-form-field>
                      <input matInput placeholder="Password">
                  </mat-form-field>
            </div>
            <div class="col-sm-6">
                  <mat-form-field>
                      <input matInput placeholder="Repeat Password">
                  </mat-form-field>
            </div>
         </div>
         <div class="row">
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
         <button mat-dialog-close class="btn btn-default pull-left" type="button">Cancel</button>
         <button class="btn btn-blue">Create</button>
      </div>
   </form>
</div>
  `
})
export class NewOfferComponent {

}

