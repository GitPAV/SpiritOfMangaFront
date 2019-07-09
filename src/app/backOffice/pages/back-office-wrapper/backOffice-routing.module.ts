import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackOfficeModule } from './backOffice.module';

import { BackOfficeWrapperComponent } from './back-office-wrapper.component';
import { CreateMangaComponent } from '../../components/create-manga/create-manga.component';
import { SeriesComponent } from '../../components/create-modify-series/create-modify-serie.component';
import { CreatePackComponent } from '../../components/create-pack/create-pack.component';
import { UpdateMangaComponent } from '../../components/update-manga/update-manga.component';
import { StockMangaComponent } from '../../components/stock-manga/stock-manga.component';
import { OnGoingOrderComponent } from '../../components/on-going-order/on-going-order.component';
import { ManageUsersComponent } from '../../components/manage-users/manage-users.component';
import { DisponibilityAlertsComponent } from '../../components/disponibility-alerts/disponibility-alerts.component';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { ManageHomeComponent } from '../../components/manage-home/manage-home.component';
import { ArchiveOrderComponent } from '../../components/archive-order/archive-order.component';

export const backOfficeRouteList: Routes = [

    // ************** BACK OFFICE ********************
  {
    path: '',
    component: BackOfficeWrapperComponent,
    children: [
      {
        path:'',
        redirectTo: 'gestion-pagedacceuil',
        pathMatch: 'full'
      },
      {
        path: 'gestion-pagedacceuil',
        component: ManageHomeComponent
      },
      // { path: '**', 
      //   component: 
      //   404 error component
      // },
      {
        path: 'creer-manga',
        component: CreateMangaComponent
      },
      {
        path: 'serie',
        component: SeriesComponent
      },
      {
        path: 'nouveau-pack',
        component: CreatePackComponent
      },
      {
        path: 'modifier-manga',
        component: UpdateMangaComponent
      },
      {
        path: 'gerer-stockprixetat',
        component: StockMangaComponent
      },
      {
        path: 'commande-encours',
        component: OnGoingOrderComponent
      },
      {
        path: 'gerer-utilisateurs',
        component: ManageUsersComponent
      },
      {
        path: 'gerer-utilisateurs/utilisateurs/:id',
        component: UserDetailsComponent
      },
      {
        path: 'commande-archive',
        component: ArchiveOrderComponent
      },
      {
        // redirection provisoire en attente de mieux
        path: 'gerer-utilisateurs/utilisateurs/:id/gerer-utilisateurs',
        component: UserDetailsComponent,
        redirectTo: 'gerer-utilisateurs',
        pathMatch: 'full' 
      },
      {
        path: 'alerte-disponibilitee',
        component: DisponibilityAlertsComponent
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