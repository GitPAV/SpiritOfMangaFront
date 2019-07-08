import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontOfficeModule } from './frontOffice.module'

import { FrontOfficeWrapperComponent } from './front-office-wrapper.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateUserComponent } from '../../components/create-user/create-user.component';

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
      {
        path: 'form-user',
        component: CreateUserComponent
      }
    ]
  }
];
  
  @NgModule({
    imports: [
        FrontOfficeModule,
        RouterModule.forChild(frontOfficeRouteList),
        
    ],

  })
  export class FrontRoutingModule { }