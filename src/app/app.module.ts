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
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent, ChartsDialog, MarketHoursDialog,FXHeatmapDialog,Coin360Dialog, LiveTVDialog,FXCrossRatesDialog, OtherChartDialog, ZoomDialog } from './dashboard/dashboard.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { AppConfig } from './app.config';
import { AppLocalConfig } from './app.local.config';
import { ErrorComponent } from './error/error.component';
import { User } from './models/index';
import { SidenavComponent, PreferencesDialog } from './sidenav/sidenav.component';
import { RightareaComponent } from './rightarea/rightarea.component';
import { ChatareaComponent } from './chatarea/chatarea.component';
import { AuthGuard } from './auth.guard';
import { LockedchatroomComponent } from './lockedchatroom/lockedchatroom.component';
import { DirectchatroomComponent } from './directchatroom/directchatroom.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UnlockchatroomComponent } from './unlockchatroom/unlockchatroom.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdmincontactsComponent } from './admincontacts/admincontacts.component';
import { AdminsalesComponent } from './adminsales/adminsales.component';
import { NewContactComponent } from './admincontacts/new-contact.component';
import { NewBillingComponent } from './adminbilling/new-billing.component';
import { NewOfferComponent } from './adminoffers/new-offer.component';
import { AdminoffersComponent } from './adminoffers/adminoffers.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { OnpointRoomComponent } from './onpoint-room/onpoint-room.component';
import { lockeddialogComponent } from './sidenav/locked-dialog.component';
import { AdminbillingComponent } from './adminbilling/adminbilling.component';
import { AdmincouponsComponent } from './admincoupons/admincoupons.component';
import { NewCouponsComponent } from './admincoupons/new-coupons.component';
import { AdminchatroomComponent } from './adminchatroom/adminchatroom.component';
import { NewChatroomComponent } from './adminchatroom/new-cahtroom.component';
import { DeleteChatroomComponent } from './adminchatroom/deletechatroom.component';
import { AdminservicesComponent } from './adminservices/adminservices.component';
import { NewServicesComponent } from './adminservices/new-services.component';
import { AdminapiComponent } from './adminapi/adminapi.component';
import { AdmincomplianceComponent } from './admincompliance/admincompliance.component';
import { AdminwidgetComponent } from './adminwidget/adminwidget.component';
import { CustomwidgetComponent } from './adminwidget/customwidget-dialog.component';
import { ConfiguredialogComponent } from './adminwidget/configure-dialog.component';
import { AdminonlineativityComponent } from './adminonlineativity/adminonlineativity.component';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';
import { NewTeamAvatarComponent } from './adminsettings/new-teamavatar.component';
import { CustomScriptComponent } from './adminsettings/custom-script.component';
import { InviteContactComponent } from './admincontacts/invite-contact.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AdminmarketingComponent } from './adminmarketing/adminmarketing.component';
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
    LockedchatroomComponent,
    DirectchatroomComponent,
    AdmindashboardComponent,
    UnlockchatroomComponent,
    UserPanelComponent,
    AdminSidebarComponent,
    AdmincontactsComponent,
    AdminsalesComponent,
    NewOfferComponent,
    AdminoffersComponent,
    ProfileSidebarComponent,
    OnpointRoomComponent,
    lockeddialogComponent,
    AdminbillingComponent,
    NewBillingComponent,
    AdmincouponsComponent,
    NewCouponsComponent,
    AdminchatroomComponent,
    NewChatroomComponent,
    AdminservicesComponent,
    NewServicesComponent,
    AdminapiComponent,
    AdmincomplianceComponent,
    AdminwidgetComponent,
    CustomwidgetComponent,
    ConfiguredialogComponent,
    AdminonlineativityComponent,
    AdminsettingsComponent,
    NewTeamAvatarComponent,
    CustomScriptComponent,
    DeleteChatroomComponent,
    NewContactComponent,
    InviteContactComponent,
    AdminmarketingComponent,
    PreferencesDialog,
    ChartsDialog,
    MarketHoursDialog,
    FXHeatmapDialog,
    Coin360Dialog,
    LiveTVDialog,
    FXCrossRatesDialog,
    OtherChartDialog,
    ZoomDialog
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
    MatTableExporterModule
  ],
  providers: [
    AuthService,
    HttpService,
    AppConfig,
    AppLocalConfig,
    User,
    AuthGuard
  ],
  entryComponents: [ZoomDialog,OtherChartDialog, FXCrossRatesDialog,LiveTVDialog,Coin360Dialog,FXHeatmapDialog, MarketHoursDialog, ChartsDialog, PreferencesDialog, InviteContactComponent, NewContactComponent, NewOfferComponent,
    lockeddialogComponent, NewBillingComponent, CustomwidgetComponent, NewCouponsComponent,
    NewChatroomComponent, NewServicesComponent, ConfiguredialogComponent, NewTeamAvatarComponent,
    CustomScriptComponent, DeleteChatroomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
