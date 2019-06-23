import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMangaComponent } from './components/create-manga/create-manga.component';
import { UpdateMangaComponent } from './components/update-manga/update-manga.component';
import { SeriesPageComponent } from './backOffice/pages/series-page/series-page.component';
import { FormComponent } from './backOffice/components/form/form.component';
import { UpdatePacksComponent} from './components/update-packs/update-packs.component';
import { StockMangaComponent } from './backOffice/components/stock-manga/stock-manga.component';
import { ManageHeadersComponent } from './backOffice/components/manage-headers/manage-headers.component';


const routes: Routes = [
  {
    path:'form-manga',
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
  path: 'manage-packs',
  component: UpdatePacksComponent
},
{
    path: 'stock-manga',
    component: StockMangaComponent
  },
  {
    path: 'manage-headers',
    component: ManageHeadersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
