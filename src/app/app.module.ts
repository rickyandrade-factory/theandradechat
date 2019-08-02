import './../polyfills';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { AppConfig } from './app.config';
import { AppLocalConfig } from './app.local.config';
import { ErrorComponent } from './error/error.component';
import { User } from './models/index';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RightareaComponent } from './rightarea/rightarea.component';
import { ChatareaComponent } from './chatarea/chatarea.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    ErrorComponent,
    SidenavComponent,
    RightareaComponent,
    ChatareaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularWebStorageModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    HttpService,
    AppConfig,
    AppLocalConfig,
    User,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
