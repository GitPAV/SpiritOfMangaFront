import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BackOfficeWrapperComponent } from './back-office-wrapper.component';
import { NavBarBackComponent } from '../../components/nav-bar-back/nav-bar-back.component';
import { CreateMangaComponent } from '../../components/create-manga/create-manga.component';
import { HeaderBackComponent } from '../../components/header-back/header-back.component';


@NgModule({
  declarations: [
    BackOfficeWrapperComponent,
    HeaderBackComponent,
    NavBarBackComponent,
    CreateMangaComponent
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
