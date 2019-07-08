import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMangaComponent } from './backOffice/components/create-manga/create-manga.component';
import { UpdateMangaComponent } from './backOffice/components/update-manga/update-manga.component';
import { SeriesComponent } from './backOffice/components/create-modify-series/create-modify-serie.component';
import { CreatePackComponent } from './backOffice/components/create-pack/create-pack.component';
import { UpdatePacksComponent} from './backOffice/components/update-packs/update-packs.component';
import { StockMangaComponent } from './backOffice/components/stock-manga/stock-manga.component';
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
import { AppComponent } from './app.component';
import { FrontOfficeWrapperComponent } from './frontOffice/pages/front-office-wrapper/front-office-wrapper.component'
import { BackOfficeWrapperComponent } from './backOffice/pages/back-office-wrapper/back-office-wrapper.component';


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