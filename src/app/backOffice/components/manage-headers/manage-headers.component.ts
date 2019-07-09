import { Component, OnInit } from '@angular/core';
import { MangaDataService } from './../../../services/manga-data.service'

@Component({
  selector: 'app-manage-headers',
  templateUrl: './manage-headers.component.html',
  styleUrls: ['./manage-headers.component.scss']
})
export class ManageHeadersComponent implements OnInit {

  mangas = []

  constructor( private mangaService : MangaDataService ) { }

  ngOnInit() {
    this.mangaService.getMangas().subscribe(
      mangas => { this.mangas = mangas}
    )
  }

}
