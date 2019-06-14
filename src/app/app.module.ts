import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMangaComponent } from './components/create-manga/create-manga.component';
import { UpdateMangaComponent } from './components/update-manga/update-manga.component';
import { SearchMangaBarComponent } from './components/search-manga-bar/search-manga-bar.component';
import { FormComponent } from './backOffice/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSeriesComponent } from './backOffice/components/create-series/create-series.component';
import { SeriesPageComponent } from './backOffice/pages/series-page/series-page.component';
import { ManageSeriesComponent } from './backOffice/components/manage-series/manage-series.component';
import { BackOfficePageComponent } from './backOffice/pages/back-office-page/back-office-page.component';
import { FilterPipe } from './../app/services/filter.pipe';
import { CreatePackComponent } from './backOffice/components/create-pack/create-pack.component';
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
    CreatePackComponent,
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
