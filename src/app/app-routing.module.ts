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
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AuthAdminGuard], 
    children:[
      {path: 'dashboard', component: AdmindashboardComponent, canActivate: [AuthGuard]},
      { path: 'contacts', component: AdmincontactsComponent, canActivate: [AuthGuard]},
      { path: 'sales', component: AdminsalesComponent, canActivate: [AuthGuard]},
      { path: 'offers', component: AdminoffersComponent, canActivate: [AuthGuard]},
      { path: 'billing', component: AdminbillingComponent, canActivate: [AuthGuard]},
      { path: 'coupons', component: AdmincouponsComponent, canActivate: [AuthGuard]},
      { path: 'chatrooms', component: AdminchatroomComponent, canActivate: [AuthGuard]},
      { path: 'services', component: AdminservicesComponent, canActivate: [AuthGuard]},
      { path: 'api', component: AdminapiComponent, canActivate: [AuthGuard]},
      { path: 'settings', component: AdminsettingsComponent, canActivate: [AuthGuard]},
      { path: 'registration-settings', component: RegistrationSetiingsComponent, canActivate: [AuthGuard]},
      { path: 'compliance', component: AdmincomplianceComponent, canActivate: [AuthGuard]},
      { path: 'widgets', component: AdminwidgetComponent, canActivate: [AuthGuard]},
      { path: 'marketing', component: AdminmarketingComponent, canActivate: [AuthGuard]},
      { path: 'onlineactivity', component: AdminonlineativityComponent, canActivate: [AuthGuard]},
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
