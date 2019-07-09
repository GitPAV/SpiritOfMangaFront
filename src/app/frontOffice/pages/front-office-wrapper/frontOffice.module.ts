import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FrontFooterComponent } from '../../components/front-footer/front-footer.component';
import { HomepageComponent } from '../homepage/homepage.component'
import { HeaderHomeTwoComponent } from '../../components/header-home-two/header-home-two.component';
import { HeaderHomeOneComponent } from '../../components/header-home-one/header-home-one.component';
import { CardMangaComponent } from '../../components/card-manga/card-manga.component';
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



@NgModule({
  declarations: [
    FrontOfficeWrapperComponent,
    HomepageComponent,
    HeaderHomeOneComponent,
    HeaderHomeTwoComponent,
    CardMangaComponent, 
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
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],

})
export class FrontOfficeModule { }
