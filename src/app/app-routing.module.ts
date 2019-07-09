import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleGuardService } from './common/security/role-guard.service';



const routes: Routes = [

  // ************** FRONT OFFICE ********************

  {
    path:'',
    redirectTo: 'front',
    pathMatch: 'full'
  },
  {
    path: 'front',
    loadChildren: './frontOffice/pages/front-office-wrapper/frontOffice-routing.module#FrontRoutingModule'
  },

  // ************** BACK OFFICE ********************

  {
    path: 'back',
    loadChildren: './backOffice/pages/back-office-wrapper/backOffice-routing.module#BackRoutingModule',
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }