import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdmincontactsComponent } from './admin/admincontacts/admincontacts.component';

import { ErrorComponent } from './error/error.component';
import { AdminsalesComponent } from './admin/adminsales/adminsales.component';
import { AdminoffersComponent } from './admin/adminoffers/adminoffers.component';
import { AdminbillingComponent } from './admin/adminbilling/adminbilling.component';
import { OnpointRoomComponent } from './onpoint-room/onpoint-room.component';
import { AdmincouponsComponent } from './admin/admincoupons/admincoupons.component';
import { AdminchatroomComponent } from './admin/adminchatroom/adminchatroom.component';
import { AdminservicesComponent } from './admin/adminservices/adminservices.component';
import { AdminapiComponent } from './admin/adminapi/adminapi.component';
import { AdmincomplianceComponent } from './admin/admincompliance/admincompliance.component';
import { AdminwidgetComponent } from './admin/adminwidget/adminwidget.component';
import {AdminmarketingComponent} from './admin/adminmarketing/adminmarketing.component'
import { AdminonlineativityComponent } from './admin/adminonlineativity/adminonlineativity.component';
import { AdminsettingsComponent } from './admin/adminsettings/adminsettings.component';
import { AuthGuard } from './auth.guard';
import { RegistrationSetiingsComponent } from './admin/registration-setiings/registration-setiings.component';
import { AdminComponent } from './admin/admin.component';
import { AuthAdminGuard } from './auth.admin.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthAdminGuard], 
    children:[
      {path: 'dashboard', component: AdmindashboardComponent, canActivate: [AuthAdminGuard]},
      { path: 'contacts', component: AdmincontactsComponent, canActivate: [AuthAdminGuard]},
      { path: 'sales', component: AdminsalesComponent, canActivate: [AuthAdminGuard]},
      { path: 'offers', component: AdminoffersComponent, canActivate: [AuthAdminGuard]},
      { path: 'billing', component: AdminbillingComponent, canActivate: [AuthAdminGuard]},
      { path: 'coupons', component: AdmincouponsComponent, canActivate: [AuthAdminGuard]},
      { path: 'chatrooms', component: AdminchatroomComponent, canActivate: [AuthAdminGuard]},
      { path: 'services', component: AdminservicesComponent, canActivate: [AuthAdminGuard]},
      { path: 'api', component: AdminapiComponent, canActivate: [AuthAdminGuard]},
      { path: 'settings', component: AdminsettingsComponent, canActivate: [AuthAdminGuard]},
      { path: 'registration-settings', component: RegistrationSetiingsComponent, canActivate: [AuthAdminGuard]},
      { path: 'compliance', component: AdmincomplianceComponent, canActivate: [AuthAdminGuard]},
      { path: 'widgets', component: AdminwidgetComponent, canActivate: [AuthAdminGuard]},
      { path: 'marketing', component: AdminmarketingComponent, canActivate: [AuthAdminGuard]},
      { path: 'onlineactivity', component: AdminonlineativityComponent, canActivate: [AuthAdminGuard]},
    ]
  },

   { path: 'onpoint-room', component: OnpointRoomComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
