import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { GetPacksService } from 'src/app/services/get-packs.service';
import { Packs } from '../../../common/models/pack.model';


@Component({
  selector: 'app-search-pack-bar',
  templateUrl: './search-pack-bar.component.html',
  styleUrls: ['./search-pack-bar.component.scss']
})
export class SearchPackBarComponent implements OnInit {
  packs: Packs[];
  research: string;
  formCondition: boolean;

  @Output() selectPack = new EventEmitter();

  constructor(private searchPackService: GetPacksService) { }

  ngOnInit() {
  }

  getTitlePacks(event){
    this.searchPackService.getSearchTitle(event)
    .subscribe(pack => {
      this.packs = pack;
    })
  }

  sendChosenPack(pack){
    let packsToSend = [];
    packsToSend.push(pack);
    this.searchPackService.emitterPack(packsToSend);
    this.selectPack.emit(packsToSend);
    
    this.research = '';
    this.packs = [];
    this.formCondition = !this.formCondition;
  }

}
