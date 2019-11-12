import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontOfficeModule } from './frontOffice.module'

import { FrontOfficeWrapperComponent } from './front-office-wrapper.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { CataloguePacksComponent } from '../catalogue-packs/catalogue-packs.component';
import { PromotionsComponent } from '../promotions/promotions.component';
import { VendreMangasComponent } from '../vendre-mangas/vendre-mangas.component';
import { CGVFooterComponent } from '../cgv-footer/cgv-footer.component';
import { DeliveryFeeFooterComponent } from '../delivery-fee-footer/delivery-fee-footer.component';
import { AboutUsFooterComponent } from '../about-us-footer/about-us-footer.component';
import { UserOpinionFooterComponent } from '../user-opinion-footer/user-opinion-footer.component';
import { ContactFooterComponent } from '../contact-footer/contact-footer.component';
import { GalleryMangaPageComponent } from '../gallery-manga-page/gallery-manga-page.component';
import { FullMangaComponent } from '../full-manga/full-manga.component';
import { PanierComponent } from '../panier/panier.component';
import { UserLoginComponent } from '../../components/user-login/user-login.component';
import { FullPackComponent } from '../full-pack/full-pack.component';
import { NewPasswordComponent } from '../../components/new-password/new-password.component';
import { RegeneratePasswordComponent } from '../../components/regenerate-password/regenerate-password.component';
import { UserProfilComponent } from '../../components/user-profil/user-profil.component';
import { ResetPasswordPage } from '../../../common/security/new-password.guard';


export const frontOfficeRouteList: Routes = [

    // ************** FRONT OFFICE ********************
  {
    path: '',
    component: FrontOfficeWrapperComponent,
    children: [
      {
        path:'',
        redirectTo: 'page-dacceuil',
        pathMatch: 'full'
      },
      {
        path: 'page-dacceuil',
        component: HomepageComponent
      },
      // { path: '**', 
      //   component: 
      //   404 error component
      // },

      // NAVBAR

      {
        path: 'user-login/creation-utilisateur',
        component: CreateUserComponent
      },
      {
        path : 'mangas-liste',
        component : GalleryMangaPageComponent
      },
      {
        path : 'promotion',
        component : PromotionsComponent
      },
      {
        path : 'packs-liste',
        component : CataloguePacksComponent
      },
      {
        path : 'vendre-manga',
        component : VendreMangasComponent
      },
      {
        path: 'panier',
        component : PanierComponent
      },
      {
        path: 'user-login',
        component: UserLoginComponent
      },
      {
        path: 'regenerate-password',
        component: RegeneratePasswordComponent
      },
      {
        path: 'TzApeyaNpBzRJmGrit59K4NJ5Cy/:token',
        component: NewPasswordComponent,
        canActivate: [ResetPasswordPage]
      },
      {
        path: 'user-profil',
        component: UserProfilComponent
      },

      // MANGAS & PACKS BY ID

      {
        path : 'mangas-liste/:mangaID',
        component : FullMangaComponent
      },
      {
        path : 'page-dacceuil/:mangaID',
        component : FullMangaComponent
      },
      {
        path : 'promotion/:mangaID',
        component : FullMangaComponent
      },
      {
        path : 'packs-liste/:packID',
        component : FullPackComponent
      },

      // FOOTER

      {
        path : 'CGV',
        component : CGVFooterComponent
      },
      {
        path : 'frais-de-port',
        component : DeliveryFeeFooterComponent
      },
      {
        path : 'a-propos',
        component : AboutUsFooterComponent
      },
      {
        path : 'avis',
        component : UserOpinionFooterComponent
      },
      {
        path : 'contact',
        component : ContactFooterComponent
      },
    ]
  }
];

@NgModule({
  imports: [
      FrontOfficeModule,
      RouterModule.forChild(frontOfficeRouteList),
  ],

})
export class FrontRoutingModule {}
