import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admindashboard/admindashboard.component';
import { AdminAppComponent } from './admin-app.component';

// import { AdminAppComponent } from './admin-app.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminAppComponent,
        children: [
            {
                path: 'dashboarda',
                component: AdminDashboardComponent
            }
        ]
    }
   
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminAppRoutingModule { }
