import { Component, OnInit, Input } from '@angular/core';
import { SearchMangasFrontService } from '../../../services/search-mangas-front.service';

@Component({
  selector: 'app-gallery-manga',
  templateUrl: './gallery-manga.component.html',
  styleUrls: ['./gallery-manga.component.scss']
})
export class GalleryMangaComponent implements OnInit {
  mangas;
  mangasUnsub;
  @Input() genreId;

  constructor( private mangaDataService: SearchMangasFrontService) { }

  ngOnInit() {
    this.mangasUnsub = this.mangaDataService.getMangas().subscribe(mangas => {
      this.mangas = mangas;
      this.mangasUnsub.unsubscribe();
    });
    this.mangaDataService.sendMangas.subscribe(mangas => {
      this.mangas = mangas;
    });

  }

}
