import { Component, OnInit, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-web-storage';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';
import { DOCUMENT } from '@angular/common';

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
   <form [formGroup]="newUserData" (ngSubmit)="createUser()">
      <div class="modal-body wrap-div">
         <div *ngIf="isLoading" class="loading-indicator">
            <mat-spinner style="margin:0 auto;" mode="indeterminate"></mat-spinner>
         </div>
        <div class="row">
          <div class="col-xs-12">
            <mat-form-field>
                <input matInput formControlName="fullname" name="fullname" placeholder="Full Name">
                <p style="margin:0px;" *ngIf="!isValid && errorMessageFullname">{{errorMessageFullname}}</p>
            </mat-form-field>
          </div>
        </div>
        <div class="row">    
            <div class="col-sm-6">
               <mat-form-field>
                  <input matInput formControlName="email" name="email" placeholder="Email">
                  <p style="margin:0px;" *ngIf="!isValid && errorMessageEmail">{{errorMessageEmail}}</p>
               </mat-form-field>
            </div>
            <div class="col-sm-6">
               <mat-form-field>
                  <input matInput formControlName="username" name="username" placeholder="Username">
                  <p style="margin:0px;" *ngIf="!isValid && errorMessageUsername">{{errorMessageUsername}}</p>
               </mat-form-field>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6">
               <mat-form-field>
                  <mat-select formControlName="role" name="role" placeholder="Role">
                     <mat-option value="1">Admin</mat-option>
                     <mat-option value="3">Instructor</mat-option>
                     <mat-option value="4">Moderator</mat-option>
                     <mat-option value="2">User</mat-option>
                  </mat-select>
                  <p style="margin:0px;" *ngIf="!isValid && errorMessageRole">{{errorMessageRole}}</p>
                  <mat-hint>
                     <a class="">
                           <i class="fa fa-info-circle"></i>
                     </a>
                  </mat-hint>
               </mat-form-field>
            </div>
            <div class="col-sm-6">
                  <mat-form-field>
                      <input matInput formControlName="password" name="password" placeholder="Password">
                      <p style="margin:0px;" *ngIf="!isValid && errorMessagePassword">{{errorMessagePassword}}</p>
                  </mat-form-field>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6">
                  <mat-form-field>
                      <input matInput formControlName="repeat_password" name="repeat_password" placeholder="Repeat Password">
                      <p style="margin:0px;" *ngIf="!isValid && errorMessageRepeatPassword">{{errorMessageRepeatPassword}}</p>
                  </mat-form-field>
            </div>
            <div class="col-sm-6">
               <div class="checkbox">
                  <label>
                  <input type="checkbox" formControlName="send_mail" name="send_mail" class=""> Send a welcome email
                  </label>
               </div>
            </div> 
         </div>
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" mat-dialog-close  class="btn btn-default pull-left" type="button" >Cancel</button>
         <button type="submit"  class="btn btn-blue">Create</button>
      </div>
   </form>
</div>
  `
})

export class NewContactComponent {

   public isLoading = false;
   public isValid = true;

   public errorMessageEmail: any;
   public errorMessageFullname: any;
   public errorMessagePassword: any;
   public errorMessageRepeatPassword: any;
   public errorMessageRole: any;
   public errorMessageUsername: any;

   public newUserData = new FormGroup({
      fullname: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      role: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      repeat_password: new FormControl("", Validators.required),
      send_mail: new FormControl(""),
      agency_id: new FormControl(this.userService.getUser().agency_id),
      status: new FormControl(1),
   });
   
   constructor(private auth: AuthService, private userService: UserService) { 
   }

   createUser() {
      let userData = this.validateData();
      if (userData) {
         this.isLoading = true;
         console.log(userData);
         this.auth.createUserAdmin(userData).subscribe((data: any) => {
            console.log(data);
            if (data && data.hasOwnProperty('success')) {
               location.reload();
            } else {
               console.log("registration failed----")
            }
         })
      } else {
         console.log("registration failed----")
      }
   }

   validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   }

   validateData() {
      let userData = this.newUserData.value;
      var procesData = { email: "", password: "", firstname: "", lastname: "", username: "", role_id: "", agency_id: "", status: "" };
      if (this.validateEmail(userData.email)) {
         procesData.email = userData.email;
         this.errorMessageEmail = false;
      } else {
         this.isValid = false;
         this.errorMessageEmail = "Please enter a valid email";
         return false;
      }

      if (userData.fullname) {
         var name = userData.fullname.trim().split(' ')
         if (name.length > 1) {
            var name = userData.fullname.trim().split(' ')
            procesData.firstname = name[0];
            name.shift();
            procesData.lastname = name.join(' ');
         } else {
            this.isValid = false;
            this.errorMessageFullname = "Please enter in format \"FirstName LastName\"";
            return false;
         }
         this.errorMessageFullname = false;
      } else {
         this.isValid = false;
         this.errorMessageFullname = "Fullname is required";
         return false;
      }

      if (userData.password) {
         this.errorMessagePassword = false;
         procesData.password = userData.password;
      } else {
         this.isValid = false;
         this.errorMessagePassword = "Password is required";
         return false;
      }
      if (userData.repeat_password !== userData.password) {
         console.log("Password does not Match");
         this.isValid = false;
         this.errorMessageRepeatPassword = "Password does not Match";
         return false;
      }

      if (userData.role) {
         this.errorMessageRole = false;
         procesData.role_id = userData.role;
      } else {
         this.isValid = false;
         this.errorMessageRole = "Please Select a Role";
         return false;
      }

      if (userData.username) {
         this.errorMessageUsername = false;
         procesData.username = userData.username;
      } else {
         this.isValid = false;
         this.errorMessageUsername = "Please Choose a Username";
         return false;
      }
      // procesData.send_mail = userData.send_mail;
      procesData.agency_id = userData.agency_id;
      procesData.status = userData.status;
      
      return procesData;
   }
}

