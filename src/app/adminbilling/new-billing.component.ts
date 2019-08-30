import { Component } from '@angular/core';
@Component({
  template: `
  <div class="modal-content new_user_dialog biling_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button type="button" class="close" aria-label="Close">
         <span aria-hidden="true">×</span>
         </button>
         Add Billing
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
              <mat-form-field class="example-full-width">
                  <textarea matInput placeholder="Description *" ></textarea>
              </mat-form-field>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12">
            <mat-form-field class="example-full-width" >
              <textarea matInput placeholder="Statement Description *" value="" ></textarea>
            </mat-form-field>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-3">
               <mat-form-field>
                  <input matInput placeholder="Price *" value=""> 
               </mat-form-field>
            </div>
            <div class="col-sm-3">
                  <mat-form-field>
                  <mat-label></mat-label>
                  <mat-select [(value)]="currency">
                    <mat-option value="empty"></mat-option>
                    <mat-option value="usd">USD</mat-option>
                    <mat-option value="eur">EUR</mat-option>
                    <mat-option value="gbp">GBP</mat-option>
                    <mat-option value="cad">CAD</mat-option>
                    <mat-option value="aud">AUD</mat-option>
                    <mat-option value="jpy">JPY</mat-option>
                  </mat-select>
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                  <span style="font-size: 14px;
                  position: relative; top: -3px; color: #757575;">One-Off Payment</span>
                 <mat-checkbox> is one-off</mat-checkbox>
            </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
                <mat-form-field>
                  <input matInput placeholder="Bill every" value=""> 
                </mat-form-field>
            </div>
            <div class="col-sm-3">
                  <mat-form-field>
                  <mat-label></mat-label>
                  <mat-select [(value)]="currency">
                    <mat-option value="empty"></mat-option>
                    <mat-option value="day">Day</mat-option>
                    <mat-option value="month">Month</mat-option>
                    <mat-option value="year">Year</mat-option>
                  </mat-select>
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                  <mat-label>Trial</mat-label>
                  <mat-select [(value)]="currency">
                    <mat-option value="empty"></mat-option>
                    <mat-option value="day">No-trial</mat-option>
                    <mat-option value="month">Trial- Credit Card Required</mat-option>
                    <mat-option value="year">Trial- Credit Card Not Required</mat-option>
                  </mat-select>
                </mat-form-field>
            </div>
        </div> 
        <div class="row">
            <div class="col-xs-12" style="font-size:12px;">
              <p>When the user subscribes on this plan then active the following plan:</p>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                    <input matInput placeholder="Sub-Plan *" value=""> 
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                    <input matInput placeholder="Sub-Coupon *" value="--Without Default Couple" disable=""> 
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

export class NewBillingComponent {
  currency = 'empty';
}
