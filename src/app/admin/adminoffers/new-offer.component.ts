import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_subs new_user_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
      </button> 
         Add New Offer
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
        <div class="row">
          <div class="col-xs-12">
            <mat-form-field>
            <mat-label>User</mat-label>
                <input matInput placeholder="Select Or Search">
            </mat-form-field>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <mat-form-field>
               <mat-label>Chatroom</mat-label>
               <mat-select placeholder="Select">
                  <mat-option value="option1">On Point FX Signals 🇺🇸 (USA)</mat-option>
                  <mat-option value="option1">1-on-1 Training</mat-option>
                  <mat-option value="option1">Market Analysis</mat-option>
                  <mat-option value="option1">The Golden Circle</mat-option>
                  <mat-option value="option1">Präzise FX Signals 🇩🇪 (GER)</mat-option>
                  <mat-option value="option1">chat dev</mat-option>
                  <mat-option>7 Day Intense Private Training</mat-option>
                  <mat-option>Website Testing A/B</mat-option>
               </mat-select>
            </mat-form-field>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <mat-form-field>
               <mat-label>Billing</mat-label>
               <mat-select placeholder="Select">
                  <mat-option value="Select">Select</mat-option>
               </mat-select>
            </mat-form-field>
          </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button mat-dialog-close class="btn btn-default pull-left" type="button">Cancel</button>
         <button class="btn btn-blue">Save</button>
      </div>
   </form>
</div>
  `
})
export class NewOfferComponent {

}

