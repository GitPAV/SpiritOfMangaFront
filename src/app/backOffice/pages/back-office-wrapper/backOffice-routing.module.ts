import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackOfficeModule } from './backOffice.module';

import { BackOfficeWrapperComponent } from './back-office-wrapper.component';
import { CreateMangaComponent } from '../../components/create-manga/create-manga.component';


export const backOfficeRouteList: Routes = [

    // ************** BACK OFFICE ********************
  {
    path: '',
    component: BackOfficeWrapperComponent,
    children: [
      {
        path:'',
        redirectTo: 'homepage-back',
        pathMatch: 'full'
      },
      {
        path: 'homepage-back',
        component: CreateMangaComponent
      },
    ]
  }
];
  
  @NgModule({
    imports: [
        BackOfficeModule,
        RouterModule.forChild(backOfficeRouteList),
        
    ],

  })
  export class BackRoutingModule { }