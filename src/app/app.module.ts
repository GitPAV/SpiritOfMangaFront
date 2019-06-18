import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMangaComponent } from './components/create-manga/create-manga.component';
import { UpdateMangaComponent } from './components/update-manga/update-manga.component';
import { SearchMangaBarComponent } from './components/search-manga-bar/search-manga-bar.component';
import { FormComponent } from './backOffice/components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSeriesComponent } from './backOffice/components/create-series/create-series.component';
import { SeriesPageComponent } from './backOffice/pages/series-page/series-page.component';
import { ManageSeriesComponent } from './backOffice/components/manage-series/manage-series.component';
import { BackOfficePageComponent } from './backOffice/pages/back-office-page/back-office-page.component';
import { FilterPipe } from './../app/services/filter.pipe';
import { HomepageComponent } from './frontOffice/pages/homepage/homepage.component';
import { NavBarComponent } from './frontOffice/components/nav-bar/nav-bar.component';
import { HeaderHomeOneComponent } from './frontOffice/components/header-home-one/header-home-one.component';
import { CardMangaComponent } from './frontOffice/components/card-manga/card-manga.component';
import { SearchPackBarComponent } from './components/search-pack-bar/search-pack-bar.component';
import { UpdatePacksComponent } from './components/update-packs/update-packs.component';
import { StockMangaComponent } from './backOffice/components/stock-manga/stock-manga.component';
import { CreateStateComponent } from './backOffice/components/create-state/create-state.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CreateMangaComponent,
    UpdateMangaComponent,
    SearchMangaBarComponent,
    CreateSeriesComponent,
    SeriesPageComponent,
    ManageSeriesComponent,
    BackOfficePageComponent,
    FilterPipe,
    HomepageComponent,
    NavBarComponent,
    HeaderHomeOneComponent,
    CardMangaComponent,
    SearchPackBarComponent,
    UpdatePacksComponent,
    StockMangaComponent,
    CreateStateComponent
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
