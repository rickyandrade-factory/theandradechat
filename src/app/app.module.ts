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
import { DashboardComponent, ChartsDialog, MarketHoursDialog,FXHeatmapDialog,Coin360Dialog, LiveTVDialog,FXCrossRatesDialog, OtherChartDialog, ZoomDialog, DataFlashDialog } from './dashboard/dashboard.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { AppConfig } from './app.config';
import { AppLocalConfig } from './app.local.config';
import { ErrorComponent } from './error/error.component';
import { User } from './models/index';
import { SidenavComponent, PreferencesDialog, ManageBrockersDialog, InviteFriendDialog } from './sidenav/sidenav.component';
import { RightareaComponent } from './rightarea/rightarea.component';
import { ChatareaComponent } from './chatarea/chatarea.component';
import { AuthGuard } from './auth.guard';
import { LockedchatroomComponent } from './lockedchatroom/lockedchatroom.component';
import { DirectchatroomComponent } from './directchatroom/directchatroom.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UnlockchatroomComponent, MediaUploadDialog, NewSignalDialog } from './unlockchatroom/unlockchatroom.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdmincontactsComponent, EditContactComponent, DeleteContactComponent } from './admin/admincontacts/admincontacts.component';
import { AdminsalesComponent } from './admin/adminsales/adminsales.component';
import { NewContactComponent } from './admin/admincontacts/new-contact.component';
import { NewBillingComponent } from './admin/adminbilling/new-billing.component';
import { NewOfferComponent } from './admin/adminoffers/new-offer.component';
import { AdminoffersComponent } from './admin/adminoffers/adminoffers.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { OnpointRoomComponent } from './onpoint-room/onpoint-room.component';
import { lockeddialogComponent } from './sidenav/locked-dialog.component';
import { AdminbillingComponent } from './admin/adminbilling/adminbilling.component';
import { AdmincouponsComponent } from './admin/admincoupons/admincoupons.component';
import { NewCouponsComponent } from './admin/admincoupons/new-coupons.component';
import { AdminchatroomComponent } from './admin/adminchatroom/adminchatroom.component';
import { NewChatroomComponent } from './admin/adminchatroom/new-cahtroom.component';
import { DeleteChatroomComponent } from './admin/adminchatroom/deletechatroom.component';
import { AdminservicesComponent } from './admin/adminservices/adminservices.component';
import { NewServicesComponent } from './admin/adminservices/new-services.component';
import { AdminapiComponent } from './admin/adminapi/adminapi.component';
import { AdmincomplianceComponent } from './admin/admincompliance/admincompliance.component';
import { AdminwidgetComponent } from './admin/adminwidget/adminwidget.component';
import { CustomwidgetComponent } from './admin/adminwidget/customwidget-dialog.component';
import { ConfiguredialogComponent } from './admin/adminwidget/configure-dialog.component';
import { AdminonlineativityComponent } from './admin/adminonlineativity/adminonlineativity.component';
import { AdminsettingsComponent } from './admin/adminsettings/adminsettings.component';
import { NewTeamAvatarDialog } from './admin/adminsettings/adminsettings.component';
import { CustomScriptComponent } from './admin/adminsettings/custom-script.component';
import { InviteContactComponent } from './admin/admincontacts/invite-contact.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AdminmarketingComponent } from './admin/adminmarketing/adminmarketing.component';
import { RegistrationSetiingsComponent } from './admin/registration-setiings/registration-setiings.component';
import {ProfileDialog} from './admin/topbar/topbar.component';
import { AdminComponent } from './admin/admin.component';
import { TopbarComponent } from './admin/topbar/topbar.component';
import { AuthAdminGuard } from './auth.admin.guard';
import {CdkTableModule} from '@angular/cdk/table';

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
    NewTeamAvatarDialog,
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
    ZoomDialog,
    ManageBrockersDialog,
    MediaUploadDialog,
    DataFlashDialog,
    NewSignalDialog,
    RegistrationSetiingsComponent,
    InviteFriendDialog,
    ProfileDialog,
    AdminComponent,
    TopbarComponent,
    EditContactComponent,
    DeleteContactComponent,
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
    MatTableExporterModule,
    CdkTableModule
    
  ],
  providers: [
    AuthService,
    HttpService,
    AppConfig,
    AppLocalConfig,
    User,
    AuthGuard,
    AuthAdminGuard
  ],
  entryComponents: [ProfileDialog,InviteFriendDialog,DeleteContactComponent, NewSignalDialog,DataFlashDialog, MediaUploadDialog,ManageBrockersDialog, ZoomDialog,OtherChartDialog, FXCrossRatesDialog,LiveTVDialog,Coin360Dialog,FXHeatmapDialog, MarketHoursDialog, ChartsDialog, PreferencesDialog, InviteContactComponent,EditContactComponent, NewContactComponent, NewOfferComponent,
    lockeddialogComponent, NewBillingComponent, CustomwidgetComponent, NewCouponsComponent,
    NewChatroomComponent, NewServicesComponent, ConfiguredialogComponent, NewTeamAvatarDialog,
    CustomScriptComponent, DeleteChatroomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
