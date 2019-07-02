import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMangaComponent } from './backOffice/components/create-manga/create-manga.component';
import { UpdateMangaComponent } from './backOffice/components/update-manga/update-manga.component';
import { SearchMangaBarComponent } from './backOffice/components/search-manga-bar/search-manga-bar.component';
import { FormComponent } from './frontOffice/components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSeriesComponent } from './backOffice/components/create-series/create-series.component';
import { SeriesComponent } from './backOffice/components/create-modify-series/create-modify-serie.component';
import { ManageSeriesComponent } from './backOffice/components/manage-series/manage-series.component';
import { BackOfficePageComponent } from './backOffice/pages/back-office-page/back-office-page.component';
import { FilterPipe } from './../app/services/filter.pipe';
import { CreatePackComponent } from './backOffice/components/create-pack/create-pack.component';
import { HomepageComponent } from './frontOffice/pages/homepage/homepage.component';
import { NavBarComponent } from './frontOffice/components/nav-bar/nav-bar.component';
import { HeaderHomeOneComponent } from './frontOffice/components/header-home-one/header-home-one.component';
import { CardMangaComponent } from './frontOffice/components/card-manga/card-manga.component';
import { SearchPackBarComponent } from './backOffice/components/search-pack-bar/search-pack-bar.component';
import { UpdatePacksComponent } from './backOffice/components/update-packs/update-packs.component';
import { StockMangaComponent } from './backOffice/components/stock-manga/stock-manga.component';
import { CreateStateComponent } from './backOffice/components/create-state/create-state.component';
import { CatalogueMangasComponent } from './frontOffice/pages/catalogue-mangas/catalogue-mangas.component';
import { PromotionsComponent } from './frontOffice/pages/promotions/promotions.component';
import { CataloguePacksComponent } from './frontOffice/pages/catalogue-packs/catalogue-packs.component';
import { VendreMangasComponent } from './frontOffice/pages/vendre-mangas/vendre-mangas.component';
import { UserLoginComponent } from './frontOffice/components/user-login/user-login.component';
import { OnGoingOrderComponent } from './backOffice/components/on-going-order/on-going-order.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CreateMangaComponent,
    UpdateMangaComponent,
    SearchMangaBarComponent,
    CreateSeriesComponent,
    SeriesComponent,
    ManageSeriesComponent,
    BackOfficePageComponent,
    FilterPipe,
    CreatePackComponent,
    HomepageComponent,
    NavBarComponent,
    HeaderHomeOneComponent,
    CardMangaComponent,
    SearchPackBarComponent,
    UpdatePacksComponent,
    StockMangaComponent,
    CreateStateComponent,
    CatalogueMangasComponent,
    PromotionsComponent,
    CataloguePacksComponent,
    VendreMangasComponent,
    UserLoginComponent,
    OnGoingOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
