import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './backOffice/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSeriesComponent } from './backOffice/components/create-series/create-series.component';
import { SeriesPageComponent } from './backOffice/pages/series-page/series-page.component';
import { ManageSeriesComponent } from './backOffice/components/manage-series/manage-series.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CreateSeriesComponent,
    SeriesPageComponent,
    ManageSeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
