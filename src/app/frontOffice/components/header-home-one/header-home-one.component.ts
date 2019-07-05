import { Component, OnInit } from '@angular/core';
import { Mangas } from 'src/app/common/models/manga.model';

@Component({
  selector: 'app-header-home-one',
  templateUrl: './header-home-one.component.html',
  styleUrls: ['./header-home-one.component.scss']
})
export class HeaderHomeOneComponent implements OnInit {
  // receive a table from a service or a table from BDD and then ng-for on it
  // send datas to manga card component
  mangasToPromote : Mangas[] = JSON.parse(localStorage.getItem("promotions"));

  constructor() { }

  ngOnInit() {
  }

}
