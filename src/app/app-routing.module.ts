import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMangaComponent } from './components/create-manga/create-manga.component';
import { UpdateMangaComponent } from './components/update-manga/update-manga.component';
import { SeriesPageComponent } from './backOffice/pages/series-page/series-page.component';
import { FormComponent } from './backOffice/components/form/form.component';
import { CreatePackComponent } from './backOffice/components/create-pack/create-pack.component';
import { StockMangaComponent } from './backOffice/components/stock-manga/stock-manga.component';


const routes: Routes = [
  {
    path: 'form-manga',
    component: CreateMangaComponent
  },
  {
    path: 'form-user',
    component: FormComponent
  },
  {
    path: 'update-manga',
    component: UpdateMangaComponent
  },
  {
    path: 'manage-series',
    component: SeriesPageComponent
  },
  {
    path: 'create-pack',
    component: CreatePackComponent
  },
  {
    path: 'manage-series',
    component: SeriesPageComponent
  },
  {
    path: 'stock-manga',
    component: StockMangaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
