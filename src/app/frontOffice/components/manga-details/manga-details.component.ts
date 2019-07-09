import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MangaDataService } from '../../../services/manga-data.service';


@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent implements OnInit {

  mangas = [];
  choosenManga: {};

  constructor(private mangadataservice: MangaDataService,
              private activatedRoute: ActivatedRoute,
    ) {
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.mangadataservice.getMangas().subscribe(mangas => {
          this.mangas = mangas;
          // tslint:disable-next-line: radix
          const mangaId = parseInt(params.get('mangaID'));
          this.choosenManga = this.mangas[mangaId - 1];
          console.log(this.choosenManga);
        });
      });
     }

  ngOnInit() {
  }

}
