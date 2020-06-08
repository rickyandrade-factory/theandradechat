import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from './adminservices.service';
@Component({
  template: `
  <div class="modal-content new_user_dialog chatroom_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
        </button> 
         Add Service
      </h4>
   </div>
   <form (ngSubmit)="onSubmitService()" [formGroup]="newService">
      <div class="modal-body wrap-div">
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Name *" value="" name="name" formControlName="name" > 
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
                    <input matInput placeholder="icon" value="rss"  class="example-right-align">
                    <span matPrefix><span class="fa fa-rss fa-fw"></span>&nbsp;</span>
                </mat-form-field>
                <span class="bottom_line">Enter the icon name you like from this library <a target="_blank" href="http://fontawesome.io/icons">http://fontawesome.io/icons</a></span>
            </div>
      </div>  
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <input matInput placeholder="" value=""  class="example-right-align">
                    <span matPrefix>https://&nbsp;</span>
                </mat-form-field>
            </div>
      </div>  
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <input matInput placeholder="Params" value=""> 
                </mat-form-field>
            </div>
        </div>  
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <mat-label>Type</mat-label>
                    <mat-select [(value)]="type">
                        <mat-option value="type1">Public - The page is accessible to everybody</mat-option>
                        <mat-option value="type2">Premium - The page is associated with at least one billing plan</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
            <h5>Options</h5>
                    <mat-checkbox> Open the page in a new web browser window -</mat-checkbox> 
                        <span class="text-muted">
                            <i>Select this when the page does not allow iframe or it is HTTP</i>
                        </span><br>

                        <mat-checkbox>The page is visible -</mat-checkbox> 
                        <span class="text-muted">
                            <i>The page is displayed on the left sidebar</i>
                        </span>
            </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button mat-dialog-close  class="btn btn-default pull-left" type="button">Cancel</button>
         <button class="btn btn-blue">Create</button>
      </div>
   </form>
</div>
  `
}) 

export class NewServicesComponent implements OnInit {
    type= 'type1';
    newService: FormGroup;

    constructor(private adminServiceOfService: ServiceService){
        
    }
    ngOnInit(){
        this.newService= new FormGroup({
            'name': new FormControl(""),
            'description': new FormControl(null),
            'url': new FormControl(null),
            'plan': new FormControl(null),
            'coupon': new FormControl(null),
            'sort': new FormControl(null),
        });

    
      

    }

    onSubmitService(){
        
    }


}