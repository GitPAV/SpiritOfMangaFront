import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesPageComponent } from './backOffice/pages/series-page/series-page.component';

const routes: Routes = [
  { path: 'manage-series', component: SeriesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
