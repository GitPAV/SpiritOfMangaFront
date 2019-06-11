import { Component, OnInit } from '@angular/core';
import { MangaDataService } from 'src/app/services/manga-data.service';
import { Packs } from '../../common/models/pack.model';


@Component({
  selector: 'app-search-pack-bar',
  templateUrl: './search-pack-bar.component.html',
  styleUrls: ['./search-pack-bar.component.scss']
})
export class SearchPackBarComponent implements OnInit {
  packs: Packs[];
  research: string;

  constructor(private searchPackService: MangaDataService) { }

  ngOnInit() {
  }

}
