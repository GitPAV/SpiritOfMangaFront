import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMangaComponent } from './backOffice/components/create-manga/create-manga.component';
import { UpdateMangaComponent } from './backOffice/components/update-manga/update-manga.component';
import { SeriesComponent } from './backOffice/components/create-modify-series/create-modify-serie.component';
import { CreatePackComponent } from './backOffice/components/create-pack/create-pack.component';
import { FormComponent } from './frontOffice/components/create-user/create-user.component';
import { UpdatePacksComponent} from './backOffice/components/update-packs/update-packs.component';
import { StockMangaComponent } from './backOffice/components/stock-manga/stock-manga.component';
import { BackOfficePageComponent } from './backOffice/pages/back-office-page/back-office-page.component';
import { HomepageComponent } from './frontOffice/pages/homepage/homepage.component';
import { ModifPackComponent } from './backOffice/components/modif-pack/modif-pack.component';
import { UserLoginComponent } from './frontOffice/components/user-login/user-login.component';
import { ManageUsersComponent } from './backOffice/components/manage-users/manage-users.component';
import { UserDetailsComponent } from './backOffice/components/user-details/user-details.component';
import { AuthGuard } from './common/security/auth.guard';
import { CatalogueMangasComponent } from './frontOffice/pages/catalogue-mangas/catalogue-mangas.component';
import { DisponibilityAlertsComponent } from './backOffice/components/disponibility-alerts/disponibility-alerts.component';
import { RoleGuardService } from './common/security/role-guard.service';
import { OnGoingOrderComponent } from './backOffice/components/on-going-order/on-going-order.component';
// import { AuthGuard } from './common/security/auth.guard';


const routes: Routes = [

// ************** BACK OFFICE ********************

  {
    path: 'form-manga',
    component: CreateMangaComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
  {
    path: 'update-manga',
    component: UpdateMangaComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
  {
    path: 'manage-series',
    component: SeriesComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
  {
    path: 'create-pack',
    component: CreatePackComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
  {
    path: 'manage-packs',
    component: UpdatePacksComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
  {
    path: 'stock-manga',
    component: StockMangaComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    } 
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
  {
    path: 'modif-packs',
    component: ModifPackComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }   
  },
  {
    path: 'alerts',
    component: DisponibilityAlertsComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
  {
    path: 'on-going-order',
    component: OnGoingOrderComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },

// ************** FRONT OFFICE ********************

  {
    path: 'form-user',
    component: FormComponent
  },
  {
    path: 'catalogue-mangas',
    component: CatalogueMangasComponent
  },
  {
    path: 'form-user',
    component: FormComponent
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }