import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BackOfficeWrapperComponent } from './back-office-wrapper.component';
import { NavBarBackComponent } from '../../components/nav-bar-back/nav-bar-back.component';
import { CreateMangaComponent } from '../../components/create-manga/create-manga.component';
import { HeaderBackComponent } from '../../components/header-back/header-back.component';
import { SeriesComponent } from '../../components/create-modify-series/create-modify-serie.component';
import { CreateSeriesComponent } from '../../components/create-series/create-series.component';
import { ManageSeriesComponent } from '../../components/manage-series/manage-series.component';
import { FilterPipe } from 'src/app/services/filter.pipe';
import { CreatePackComponent } from '../../components/create-pack/create-pack.component';
import { SearchPackBarComponent } from '../../components/search-pack-bar/search-pack-bar.component';
import { SearchMangaBarComponent } from '../../components/search-manga-bar/search-manga-bar.component';
import { ModifPackComponent } from '../../components/modif-pack/modif-pack.component';
import { UpdateMangaComponent } from '../../components/update-manga/update-manga.component';
import { UpdatePacksComponent } from '../../components/update-packs/update-packs.component';
import { StockMangaComponent } from '../../components/stock-manga/stock-manga.component';
import { CreateStateComponent } from '../../components/create-state/create-state.component';
import { ManageUsersComponent } from '../../components/manage-users/manage-users.component';
import { OnGoingOrderComponent } from '../../components/on-going-order/on-going-order.component';
import { PackListItemComponent } from '../../components/pack-list-item/pack-list-item.component';
import { MangaListItemComponent } from '../../components/manga-list-item/manga-list-item.component';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { DisponibilityAlertsComponent } from '../../components/disponibility-alerts/disponibility-alerts.component';
import { ManageHomeComponent } from '../../components/manage-home/manage-home.component';
import { ArchiveOrderComponent } from '../../components/archive-order/archive-order.component';


@NgModule({
  declarations: [
    BackOfficeWrapperComponent,
    HeaderBackComponent,
    NavBarBackComponent,
    CreateMangaComponent,
    SeriesComponent,
    CreateSeriesComponent,
    ManageSeriesComponent,
    FilterPipe,
    CreatePackComponent,
    SearchPackBarComponent,
    SearchMangaBarComponent,
    ModifPackComponent,
    UpdateMangaComponent,
    UpdatePacksComponent,
    StockMangaComponent,
    CreateStateComponent,
    ManageUsersComponent,
    OnGoingOrderComponent,
    PackListItemComponent,
    MangaListItemComponent,
    UserDetailsComponent,
    DisponibilityAlertsComponent,
    ManageHomeComponent,
    ArchiveOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
})
export class BackOfficeModule { }
