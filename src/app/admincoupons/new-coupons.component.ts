import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_user_dialog biling_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button type="button" class="close" aria-label="Close">
         <span aria-hidden="true">×</span>
         </button>
         Add Coupon
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
            <div class="col-sm-6">
                <mat-form-field>
                    <mat-label>Discount Type</mat-label>
                    <mat-select [(value)]="discounttype">
                    <mat-option value="Percentage">Percentage (%)</mat-option>
                    <mat-option value="Value">Value</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                    <input matInput placeholder="Percent Off" value="" >
                </mat-form-field>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <mat-form-field>
                    <mat-label>Duration</mat-label>
                    <mat-select [(value)]="duration">
                    <mat-option value="once">once</mat-option>
                    <mat-option value="forever">Forever</mat-option>
                    <mat-option value="Repeating">Repeating</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                    <input matInput placeholder="Months" value="" >
                </mat-form-field>
            </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" class="btn btn-default pull-left" type="button">Cancel</button>
         <button class="btn btn-blue">Save</button>
      </div>
   </form>
</div>
  `
})

export class NewCouponsComponent {
    duration= 'once';
    discounttype = "";
}
