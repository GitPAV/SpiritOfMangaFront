import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../../services/genres.service';
import { TypesServiceService } from '../../../services/types-service.service';
import { SearchMangasFrontService } from '../../../services/search-mangas-front.service';

@Component({
  selector: 'app-gallery-manga-page',
  templateUrl: './gallery-manga-page.component.html',
  styleUrls: ['./gallery-manga-page.component.scss']
})
export class GalleryMangaPageComponent implements OnInit {
  genres;
  types;

  constructor(private genresService: GenresService,
    private typesService: TypesServiceService,
    private mangaDataService: SearchMangasFrontService) { }

  ngOnInit() {
    this.typesService.getTypes().subscribe( types => {
      this.types = types
    })

    this.genresService.getGenres().subscribe( genres => {
      this.genres = genres
    })
  }

  searchByGenre(genreId) {
    this.mangaDataService.sendDatas(genreId)
  }

  searchByType(typeId) {

  }

}
