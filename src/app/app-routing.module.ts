import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmincontactsComponent } from './admincontacts/admincontacts.component';

import { ErrorComponent } from './error/error.component';
import { AdminpaymentsComponent } from './adminpayments/adminpayments.component';
import { AdminsubscriptionsComponent } from './adminsubscriptions/adminsubscriptions.component';
import { AdminbillingComponent } from './adminbilling/adminbilling.component';
import { OnpointRoomComponent } from './onpoint-room/onpoint-room.component';
import { AdmincouponsComponent } from './admincoupons/admincoupons.component';
import { AdminchatroomComponent } from './adminchatroom/adminchatroom.component';
import { AdminservicesComponent } from './adminservices/adminservices.component';
import { AdminapiComponent } from './adminapi/adminapi.component';
import { AdmincomplianceComponent } from './admincompliance/admincompliance.component';
import { AdminwidgetComponent } from './adminwidget/adminwidget.component';
import { AdminonlineativityComponent } from './adminonlineativity/adminonlineativity.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard]},
  { path: 'admincontacts', component: AdmincontactsComponent, canActivate: [AuthGuard]},
  { path: 'adminpayments', component: AdminpaymentsComponent, canActivate: [AuthGuard]},
  { path: 'adminsubscriptions', component: AdminsubscriptionsComponent, canActivate: [AuthGuard]},
  { path: 'adminbilling', component: AdminbillingComponent, canActivate: [AuthGuard]},
  { path: 'onpoint-room', component: OnpointRoomComponent, canActivate: [AuthGuard]},
  { path: 'admincoupons', component: AdmincouponsComponent, canActivate: [AuthGuard]},
  { path: 'adminchatroom', component: AdminchatroomComponent, canActivate: [AuthGuard]},
  { path: 'adminservices', component: AdminservicesComponent, canActivate: [AuthGuard]},
  { path: 'adminapi', component: AdminapiComponent, canActivate: [AuthGuard]},
  { path: 'admincompliance', component: AdmincomplianceComponent, canActivate: [AuthGuard]},
  { path: 'adminwidget', component: AdminwidgetComponent, canActivate: [AuthGuard]},
  { path: 'adminonlineactivity', component: AdminonlineativityComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
