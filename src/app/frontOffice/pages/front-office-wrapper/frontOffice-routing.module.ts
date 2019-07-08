import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { frontOfficeModule } from './frontOffice.module'

import { FrontOfficeWrapperComponent } from './front-office-wrapper.component';
import { HomepageComponent } from '../homepage/homepage.component';

export const frontOfficeRouteList: Routes = [

    // ************** FRONT OFFICE ********************
  {
    path: '',
    component: FrontOfficeWrapperComponent,
    children: [
      {
        path:'',
        redirectTo: 'homepage-front',
        pathMatch: 'full'
      },
      {
        path: 'homepage-front',
        component: HomepageComponent
      },
    ]
  }
];
  
  @NgModule({
    imports: [
        frontOfficeModule,
        RouterModule.forChild(frontOfficeRouteList),
        
    ],

  })
  export class FrontRoutingModule { }