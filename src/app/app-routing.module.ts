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
import { HomepageComponent } from './frontOffice/pages/homepage/homepage.component'
import { UserLoginComponent } from './frontOffice/components/user-login/user-login.component';
// import { AuthGuard } from './common/security/auth.guard';


const routes: Routes = [
  {
    path: 'form-manga',
    component: CreateMangaComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'form-user',
    component: FormComponent
  },
  {
    path: 'update-manga',
    component: UpdateMangaComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'manage-series',
    component: SeriesComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'create-pack',
    component: CreatePackComponent,
    // canActivate: [AuthGuard]
  },
  {
  path: 'manage-packs',
  component: UpdatePacksComponent,
  // canActivate: [AuthGuard]
  },
  {
    path: 'stock-manga',
    component: StockMangaComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }