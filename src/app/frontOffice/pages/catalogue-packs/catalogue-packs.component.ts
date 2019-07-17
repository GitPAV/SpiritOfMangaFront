import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../../services/genres.service';
import { TypesServiceService } from '../../../services/types-service.service';
import { GetPacksService } from 'src/app/services/get-packs.service';

@Component({
  selector: 'app-catalogue-packs',
  templateUrl: './catalogue-packs.component.html',
  styleUrls: ['./catalogue-packs.component.scss']
})
export class CataloguePacksComponent implements OnInit {
  types;
  genres;

  constructor(
    private typesService: TypesServiceService,
    private genresService: GenresService,
    private packsService: GetPacksService
    ) { }

  ngOnInit() {
    this.typesService.getTypes().subscribe( types => {
      this.types = types
    })

    this.genresService.getGenres().subscribe( genres => {
      this.genres = genres
    })
  }

  getSearchedPack(research) {
    this.packsService.searchPacks(research)
  }

  searchByType(event) {
    this.packsService.sendPacksByType(event)
  }

  searchByGenre(event) {
    this.packsService.sendPacksByGenre(event)
  }

}
