import { Component, OnInit } from '@angular/core';
import { Mangas } from 'src/app/common/models/manga.model';
import { MangaDataService } from '../../../services/manga-data.service';

@Component({
  selector: 'app-header-home-one',
  templateUrl: './header-home-one.component.html',
  styleUrls: ['./header-home-one.component.scss']
})
export class HeaderHomeOneComponent implements OnInit {
  mangasToPromote : Mangas[];

  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
    this.mangaService.getFavorites().subscribe( mangas => {
      this.mangasToPromote = mangas
    })

  }

}
