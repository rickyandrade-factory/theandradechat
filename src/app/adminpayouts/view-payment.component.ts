import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_subs new_user_dialog view_payment">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
      </button> 
         Payment
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
        <div class="row">
          <div class="col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-12 text-right"><b>Request Date</b></div>
              <div class="col-md-8 col-sm-8 col-xs-12 no-pad"><p>2018-10-19 21:05:00</p></div>
          </div>
          <div class="col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-12 text-right"><b>Gross Amount</b></div>
              <div class="col-md-8 col-sm-8 col-xs-12 no-pad"><p>144.00</p></div>
          </div>
          <div class="col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-12 text-right"><b>Net Amount</b></div>
              <div class="col-md-8 col-sm-8 col-xs-12 no-pad"><p>129.60</p></div>
          </div>
          <div class="col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-12 text-right"><b>Balance</b></div>
              <div class="col-md-8 col-sm-8 col-xs-12 no-pad"><p>0.00</p></div>
          </div>
          <div class="col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-12 text-right"><b>Status</b></div>
              <div class="col-md-8 col-sm-8 col-xs-12 no-pad"><p>ACCEPTED</p></div>
          </div>
          <div class="col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-12 text-right"><b>Comments</b></div>
              <div class="col-md-8 col-sm-8 col-xs-12 no-pad"><p>Abc</p></div>
          </div>
          <div class="col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-12 text-right"><b>Status Date</b></div>
              <div class="col-md-8 col-sm-8 col-xs-12 no-pad"><p>2018-10-19 21:05:00</p></div>
          </div>
          <div class="col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-12 text-right"><b>Details</b></div>
              <div class="col-md-8 col-sm-8 col-xs-12 no-pad"><p>PayPal (rickytheinvestor@gmail.com)</p></div>
          </div>
        </div>  
            
      </div>
   </form>
</div>
  `
})

export class ViewPaymentComponent {
  paymethod = 'option1';
  selectedcycle = 'weekly';
}
