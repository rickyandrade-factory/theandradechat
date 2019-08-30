import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_subs new_user_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button type="button" class="close" aria-label="Close">
         <span aria-hidden="true">×</span>
         </button>
         Withdrawal Options
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
        <div class="row">
          <div class="col-xs-12">
            <mat-form-field class="example-full-width" >
            <textarea matInput placeholder="Business Details" value="Market Masters Academy 
19800 MacArthur Blvd. Suite 300 
Irvine, CA 92612" style="height:65px;"></textarea>
          </mat-form-field>
          </div>
        </div> 
            
            <div class="col-sm-12">
                  <mat-form-field>
                  <mat-label>Payment Method</mat-label>
                  <mat-select [(value)]="paymethod">
                    <mat-option value="option1">Paypal</mat-option>
                    <mat-option value="option2">Wire</mat-option>
                  </mat-select>
                </mat-form-field>
            </div>
            <div class="col-sm-12">
               <mat-form-field>
                  <input matInput placeholder="Account Details" value="rickytheinvestor@gmail.com"> 
               </mat-form-field>
            </div>
            <div class="col-sm-6">
               <mat-form-field>
                  <input matInput placeholder="Release Level" value="1"> 
               </mat-form-field>
            </div>
            <div class="col-sm-6">
                  <mat-form-field>
                  <mat-label>Payment Cycle</mat-label>
                  <mat-select [(value)]="selectedcycle">
                    <mat-option value="weekly">Weekly</mat-option>
                    <mat-option value="monthly">Monthly</mat-option>
                  </mat-select>
                </mat-form-field>
            </div>

            <mat-card class="wrap-div bg-green">
                Once your gross revenue (including Echofin's share) reaches the release level within the payment cycle we will initiate a withdrawal to your account. Your net amount will be calculated after deducting Echofin's share. The weekly payouts are executed on Fridays and the monthly every last Friday of each month.
                <br>
                The weekly payouts are executed on Fridays and the monthly every last Friday of each month.
                <br>
                Bank wire transfer fees US domestic: $15 International: $45
            </mat-card>
            
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" class="btn btn-default pull-left" type="button">Cancel</button>
         <button class="btn btn-blue">Save</button>
      </div>
   </form>
</div>
  `
})

export class WithdrawOptionComponent {
  paymethod = 'option1';
  selectedcycle = 'weekly';
}
