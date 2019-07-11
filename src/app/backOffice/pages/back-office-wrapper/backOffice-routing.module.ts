import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackOfficeModule } from './backOffice.module';
import { RoleGuardService } from '../../../common/security/role-guard.service';


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


export const backOfficeRouteList: Routes = [

    // ************** BACK OFFICE ********************
  {
    path: '',
    component: BackOfficeWrapperComponent,
    children: [
      {
        path:'',
        redirectTo: 'gestion-pagedacceuil',
        pathMatch: 'full',
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        path: 'gestion-pagedacceuil',
        component: ManageHomeComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      // { path: '**', 
      //   component: 
      //   404 error component
      // },
      {
        path: 'creer-manga',
        component: CreateMangaComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        path: 'serie',
        component: SeriesComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        path: 'nouveau-pack',
        component: CreatePackComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        path: 'modifier-manga',
        component: UpdateMangaComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        path: 'gerer-stockprixetat',
        component: StockMangaComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        path: 'commande-encours',
        component: OnGoingOrderComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        path: 'gerer-utilisateurs',
        component: ManageUsersComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        path: 'gerer-utilisateurs/utilisateurs/:id',
        component: UserDetailsComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        // redirection provisoire en attente de mieux
        path: 'gerer-utilisateurs/utilisateurs/:id/gerer-utilisateurs',
        component: UserDetailsComponent,
        redirectTo: 'gerer-utilisateurs',
        pathMatch: 'full' ,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
      },
      {
        path: 'alerte-disponibilitee',
        component: DisponibilityAlertsComponent,
        canActivate: [RoleGuardService],
        data: {      
          expectedRole: 'admin'
        }
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