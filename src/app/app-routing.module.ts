import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMangaComponent } from './components/create-manga/create-manga.component';
import { UpdateMangaComponent } from './components/update-manga/update-manga.component';
import { DeleteMangaComponent } from './delete-manga/delete-manga.component';
import { SeriesPageComponent } from './backOffice/pages/series-page/series-page.component';
import { FormComponent } from './backOffice/components/form/form.component';


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
    path: 'delete-manga',
    component: DeleteMangaComponent
  },
  { 
    path: 'manage-series', 
    component: SeriesPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
