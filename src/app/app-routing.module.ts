import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminusersComponent } from './adminusers/adminusers.component';

import { ErrorComponent } from './error/error.component';
import { AdminpaymentsComponent } from './adminpayments/adminpayments.component';
import { AdminsubscriptionsComponent } from './adminsubscriptions/adminsubscriptions.component';
import { AdminpayoutsComponent } from './adminpayouts/adminpayouts.component';
import { AdminbillingComponent } from './adminbilling/adminbilling.component';
import { OnpointRoomComponent } from './onpoint-room/onpoint-room.component';
import { AdmincouponsComponent } from './admincoupons/admincoupons.component';
import { AdminchatroomComponent } from './adminchatroom/adminchatroom.component';
import { AdminservicesComponent } from './adminservices/adminservices.component';
import { AdminapiComponent } from './adminapi/adminapi.component';
import { AdmincomplianceComponent } from './admincompliance/admincompliance.component';
import { AdminwidgetComponent } from './adminwidget/adminwidget.component';
import { AdminonlineativityComponent } from './adminonlineativity/adminonlineativity.component';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admindashboard', component: AdmindashboardComponent},
  { path: 'adminusers', component: AdminusersComponent},
  { path: 'adminpayments', component: AdminpaymentsComponent},
  { path: 'adminsubscriptions', component: AdminsubscriptionsComponent},
  { path: 'adminpayouts', component: AdminpayoutsComponent},
  { path: 'adminbilling', component: AdminbillingComponent},
  { path: 'onpoint-room', component: OnpointRoomComponent},
  { path: 'admincoupons', component: AdmincouponsComponent},
  { path: 'adminchatroom', component: AdminchatroomComponent},
  { path: 'adminservices', component: AdminservicesComponent},
  { path: 'adminapi', component: AdminapiComponent},
  { path: 'admincompliance', component: AdmincomplianceComponent},
  { path: 'adminwidget', component: AdminwidgetComponent},
  { path: 'adminsettings', component:AdminsettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
