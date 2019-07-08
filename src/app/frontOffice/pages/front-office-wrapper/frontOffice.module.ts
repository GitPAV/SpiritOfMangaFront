import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FrontFooterComponent } from '../../components/front-footer/front-footer.component';
import { HomepageComponent } from '../homepage/homepage.component'
import { HeaderHomeTwoComponent } from '../../components/header-home-two/header-home-two.component';
import { HeaderHomeOneComponent } from '../../components/header-home-one/header-home-one.component';
import { CardMangaComponent } from '../../components/card-manga/card-manga.component';
import { FrontOfficeWrapperComponent } from './front-office-wrapper.component';
import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { UserLoginComponent } from 'src/app/frontOffice/components/user-login/user-login.component';



@NgModule({
  declarations: [
    FrontOfficeWrapperComponent,
    HomepageComponent,
    HeaderHomeOneComponent,
    HeaderHomeTwoComponent,
    CardMangaComponent, 
    NavBarComponent,
    FrontFooterComponent,
    CreateUserComponent,
    UserLoginComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],

})
export class FrontOfficeModule { }
