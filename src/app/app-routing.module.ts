import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMangaComponent } from './components/create-manga/create-manga.component';
import { FormComponent } from './components/form/form.component';
import { UpdateMangaComponent } from './components/update-manga/update-manga.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
