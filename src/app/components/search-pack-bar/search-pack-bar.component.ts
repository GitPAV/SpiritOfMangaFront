import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetPacksService } from 'src/app/services/get-packs.service';
import { Packs } from '../../common/models/pack.model';



@Component({
  selector: 'app-search-pack-bar',
  templateUrl: './search-pack-bar.component.html',
  styleUrls: ['./search-pack-bar.component.scss']
})
export class SearchPackBarComponent implements OnInit {
  packs: Packs[];
  research: string;

  @Output() chosenPack = new EventEmitter();

  constructor(private searchPackService: GetPacksService) { }

  ngOnInit() {
  }

  getTitlePacks(event){
    this.searchPackService.getSearchTitle(event)
    .subscribe(pack => {
      this.packs = pack;
    })
  }
  
}
