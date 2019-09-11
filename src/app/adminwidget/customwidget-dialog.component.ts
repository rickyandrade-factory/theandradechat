import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_user_dialog custom_widget">
   <div class="modal-header">
      <h4 class="modal-title">
         <button type="button" class="close" aria-label="Close">
         <span aria-hidden="true">×</span>
         </button>
         Configure Widget
      </h4>
   </div>
   <div class="modal-body wrap-div">
      <mat-tab-group>
            <mat-tab>
              <ng-template mat-tab-label>
                  <i class="fa fa-bars" aria-hidden="true"></i>
                Details
              </ng-template>
              <div class="row">
                  <div class="col-xs-12">
                    <mat-form-field>
                        <input matInput placeholder="Title *">
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                      <div class="col-xs-12">
                          <mat-form-field>
                              <input matInput placeholder="Url *" value=""  class="example-right-align">
                              <span matPrefix>https:// &nbsp;</span>
                          </mat-form-field>
                      </div>
                </div>  
                <div class="row">
                    <div class="col-xs-12">
                    <mat-form-field>
                        <mat-label>Position *</mat-label>
                        <mat-select [(value)]="position">
                            <mat-option value="right-bar">Right-bar</mat-option>
                            <mat-option value="top-bar">Top-bar</mat-option>
                        </mat-select>
                    </mat-form-field>
                    </div>
                </div>  
                <div class="row">
                    <div class="col-sm-6">
                      <div class="checkbox">
                        <label>
                        <input type="checkbox" class="">  Enabled widget to users
                        </label>
                      </div>
                    </div>  
                </div>
            </mat-tab>
            <mat-tab >
              <ng-template mat-tab-label>
              <i class="fa fa-credit-card" aria-hidden="true"></i>
                Billing
              </ng-template>
              <div class="row">
                  <div class="col-sm-6">
                    <div class="checkbox">
                      <label>
                      <input type="checkbox" class=""> Enable billing plans
                      </label>
                    </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xs-12">
                   <p>Anyone who has paid for any of the plans should receive the premium widget version</p>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">On Point FX Signals
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                         <input type="checkbox" class="">On-Point FX Signals 7-Day FREE Trial
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> Private Forex Mentoring
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> 7-Day INTENSIVE Private Forex Training
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> On Point FX Signals (Telegram)
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  On Point FX Signals 7-Days FREE and then $57/mo
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                           <input type="checkbox" class="">  $0 test
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">  FX Signals $57 Early-bird Special
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">   Market Masters FX Signals Transfer Form
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">Market Masters VIP Forex Signals Transfer Form
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">On Point FX Signals $97/mo
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> No Credit Card Test
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                         <input type="checkbox" class=""> MMA On Point FX Signals
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">MMA OPFX Julio Vasquez
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> Exclusive 1-on-1 Training
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> MMA Signals Transfer
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                           <input type="checkbox" class="">7-Day Intense Forex Training (3 Month Plan)
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> OPFX $77/mo 7 Day Trial
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  OPFX $77/mo No Trial
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  OPFX $77/mo 7 Day Trial (No CC Required)
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">   OPFX Recurly
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  7-Day Training Recurly
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">    7-Day Training Deal Recurly
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  OPFX PP
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">    7-Day Training PP
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">7-Day Training Deal PP
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">OPFX $77/mo 7 Day Trial (No CC Required)*
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">Marcos OPFS FREE TRIAL (NO CC)
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">Isaac OPFS FREE TRIAL (NO CC)
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  Allen OPFS FREE TRIAL (NO CC)
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">    Market Mastermind (Deal)
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">Privte Mentorship
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">Prazise FX Signals
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">Website Testing A/B
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> Chat Development
                        </label>
                      </div>
                  </div>
              </div>
              <p>* The Primary plan appears in the in-chat billing form</p>
              <div class="row">
                  <div class="col-xs-12">
                    <p>Apply the following coupon in the Primary plan</p>
                    <mat-form-field>
                        <mat-label>Position *</mat-label>
                        <mat-select [(value)]="position">
                            <mat-option value="right-bar">Right-bar</mat-option>
                            <mat-option value="top-bar">Top-bar</mat-option>
                        </mat-select>
                    </mat-form-field>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xs-12">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" class="">  Widget has a different URL for premium users                        
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xs-12">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" class="">  Custom upgrade-banner message                        
                        </label>
                      </div>
                  </div>
              </div>
            </mat-tab>
            <mat-tab>
              <ng-template mat-tab-label>
                <i class="fa fa-ellipsis-v fa-fw" aria-hidden="true"></i>
                Advanced
              </ng-template>
              <div class="row">
                  <div class="col-xs-12">
                      <div class="checkbox">
                        <label>
                        <input type="checkbox" class="">   Enable Advanced Mode                       
                        </label>
                      </div>
                  </div>
              </div>
              <div class="alert bg-green">
                    <strong>Documentation</strong>
                    <br>
                    <p>You may find the full documentation on implementing the widget functions and callback at
                        <a href="#">widgets documentation</a>
                    </p>
              </div> 
              <div class="alert alert-default">
                  Widget credentials will be generated upon saving
              </div>
              <hr>
              <div>
                  <p>System user's properties to pass in the frame url</p>
              </div>
              <div class="col-sm-3">
                      <mat-checkbox> Username</mat-checkbox>
              </div>
              <div class="col-sm-3">
                      <mat-checkbox>  Email</mat-checkbox>
              </div>
              <div class="col-sm-3">
                        <mat-checkbox>  Team Name</mat-checkbox>
              </div>
              <div class="col-sm-3">
                      <mat-checkbox> Billing</mat-checkbox>
              </div>
              <p>Custom properties to pass in the frame url</p>
              <div class="row">
                  <div class="col-sm-4">
                        <mat-form-field>
                            <input matInput placeholder="key *">
                        </mat-form-field>
                  </div>
                  <div class="col-sm-8">
                        <mat-form-field>
                            <input matInput placeholder="value">
                        </mat-form-field>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-4">
                        <mat-form-field>
                            <input matInput placeholder="key *">
                        </mat-form-field>
                  </div>
                  <div class="col-sm-8">
                        <mat-form-field>
                            <input matInput placeholder="value">
                        </mat-form-field>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-4">
                        <mat-form-field>
                            <input matInput placeholder="key *">
                        </mat-form-field>
                  </div>
                  <div class="col-sm-8">
                        <mat-form-field>
                            <input matInput placeholder="value">
                        </mat-form-field>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-4">
                        <mat-form-field>
                            <input matInput placeholder="key *">
                        </mat-form-field>
                  </div>
                  <div class="col-sm-8">
                        <mat-form-field>
                            <input matInput placeholder="value">
                        </mat-form-field>
                  </div>
              </div>
              <div class="row">
              <div class="col-xs-12">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" class=""> Enable callback functions     
                        </label>
                      </div>
                  </div>
              </div>
              
              

            </mat-tab>
          </mat-tab-group>
   </div>

   <div class="modal-footer wrap-div">
      <button autofocus="" class="btn btn-default pull-left" type="button">Cancel</button>
      <button class="btn btn-blue">Create</button>
    </div>
</div>
  `
})
export class CustomwidgetComponent {
  position= 'right-bar';
}