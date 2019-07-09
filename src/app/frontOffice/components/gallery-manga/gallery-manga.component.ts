import { Component, OnInit } from '@angular/core';
import { MangaDataService } from '../../../services/manga-data.service';


@Component({
  selector: 'app-gallery-manga',
  templateUrl: './gallery-manga.component.html',
  styleUrls: ['./gallery-manga.component.scss']
})
export class GalleryMangaComponent implements OnInit {

  mangas;

  constructor( private mangadataservice: MangaDataService) { }

  ngOnInit() {
    this.mangadataservice.getMangas().subscribe(mangas => {
      this.mangas = mangas;
      console.log(this.mangas)
    });

  }

}
