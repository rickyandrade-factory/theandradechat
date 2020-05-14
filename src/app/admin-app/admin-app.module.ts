


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminAppRoutingModule } from './admin-app.routing.module';
import { MaterialModule } from './material.module';
import { AdminDashboardComponent } from './admindashboard/admindashboard.component';
@NgModule({
  declarations: [
      AdminDashboardComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AdminAppRoutingModule
  ],
  providers: [
 
  ],
  entryComponents: []
})
export class AdminAppModule { }
