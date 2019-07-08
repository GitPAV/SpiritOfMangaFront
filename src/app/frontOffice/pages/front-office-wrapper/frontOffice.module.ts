import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FrontFooterComponent } from '../../components/front-footer/front-footer.component';
import { HomepageComponent } from '../homepage/homepage.component'
import { HeaderHomeTwoComponent } from '../../components/header-home-two/header-home-two.component';
import { HeaderHomeOneComponent } from '../../components/header-home-one/header-home-one.component';
import { CardMangaComponent } from '../../components/card-manga/card-manga.component';
import { FrontOfficeWrapperComponent } from './front-office-wrapper.component';
import { UserLoginComponent } from '../../components/user-login/user-login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderHomeOneComponent,
    HeaderHomeTwoComponent,
    CardMangaComponent,
    FrontOfficeWrapperComponent,
    NavBarComponent,
    FrontFooterComponent,
    UserLoginComponent

  ],
  imports: [
    // AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule


  ],
  providers: [],
})
export class frontOfficeModule { }
