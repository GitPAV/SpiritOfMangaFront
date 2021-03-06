import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FrontFooterComponent } from '../../components/front-footer/front-footer.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { HeaderHomeTwoComponent } from '../../components/header-home-two/header-home-two.component';
import { HeaderHomeOneComponent } from '../../components/header-home-one/header-home-one.component';
import { FrontOfficeWrapperComponent } from './front-office-wrapper.component';
import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { UserLoginComponent } from 'src/app/frontOffice/components/user-login/user-login.component';
import { AlertButtonComponent } from '../../components/alert-button/alert-button.component';
import { CataloguePacksComponent } from '../catalogue-packs/catalogue-packs.component';
import { PromotionsComponent } from '../promotions/promotions.component';
import { VendreMangasComponent } from '../vendre-mangas/vendre-mangas.component';
import { CGVFooterComponent } from '../cgv-footer/cgv-footer.component';
import { DeliveryFeeFooterComponent } from '../delivery-fee-footer/delivery-fee-footer.component';
import { AboutUsFooterComponent } from '../about-us-footer/about-us-footer.component';
import { UserOpinionFooterComponent } from '../user-opinion-footer/user-opinion-footer.component';
import { ContactFooterComponent } from '../contact-footer/contact-footer.component';
import { GalleryMangaComponent } from '../../components/gallery-manga/gallery-manga.component';
import { CardComponent } from '../../components/card/card.component';
import { GalleryMangaPageComponent } from '../gallery-manga-page/gallery-manga-page.component';
import { GalleryPackComponent } from '../../components/gallery-pack/gallery-pack.component';
import { CardPackComponent } from '../../components/card-pack/card-pack.component';
import { CardPromoComponent } from '../../components/card-promo/card-promo.component';
import { MangaDetailsComponent } from '../../components/manga-details/manga-details.component';
import { FullMangaComponent } from '../full-manga/full-manga.component';
import { OrderButtonComponent } from '../../components/order-button/order-button.component';
import { PanierComponent } from '../../../frontOffice/pages/panier/panier.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PacksDetailsComponent } from '../../components/packs-details/packs-details.component';
import { FullPackComponent } from '../full-pack/full-pack.component';
import { NewPasswordComponent } from '../../components/new-password/new-password.component';
import { RegeneratePasswordComponent } from '../../components/regenerate-password/regenerate-password.component';
import { UserProfilComponent } from '../../components/user-profil/user-profil.component';

@NgModule({
  declarations: [
    FrontOfficeWrapperComponent,
    HomepageComponent,
    HeaderHomeOneComponent,
    HeaderHomeTwoComponent,
    NavBarComponent,
    FrontFooterComponent,
    CreateUserComponent,
    UserLoginComponent,
    AlertButtonComponent,
    CataloguePacksComponent,
    PromotionsComponent,
    VendreMangasComponent,
    CGVFooterComponent,
    DeliveryFeeFooterComponent,
    AboutUsFooterComponent,
    UserOpinionFooterComponent,
    ContactFooterComponent,
    GalleryMangaComponent,
    GalleryMangaPageComponent,
    CardComponent,
    GalleryMangaPageComponent,
    GalleryPackComponent,
    CardPackComponent,
    CardPromoComponent,
    MangaDetailsComponent,
    FullMangaComponent,
    OrderButtonComponent,
    PanierComponent,
    PacksDetailsComponent,
    FullPackComponent,
    RegeneratePasswordComponent,
    NewPasswordComponent,
    UserProfilComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule

  ],
  providers: [],

})
export class FrontOfficeModule { }
