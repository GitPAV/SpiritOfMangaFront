import { Component, OnInit } from '@angular/core';
import { ArchiveOrderService } from '../../../services/archive-order.service';


@Component({
  selector: 'app-archive-order',
  templateUrl: './archive-order.component.html',
  styleUrls: ['./archive-order.component.scss']
})
export class ArchiveOrderComponent implements OnInit {
  archiveOrderTable = [];
  mangaArchiveOrderTable = [];
  conditionPacks: Boolean = true;
  conditionMangas: Boolean = false;
  conditionUsers: Boolean = false;

  constructor(private ArchiveOrderServive: ArchiveOrderService) { }

  ngOnInit() {
    this.getArchiveOrder();
    this.getMangaArchiveOrder();
    
  }

  getArchiveOrder(){
    this.ArchiveOrderServive.getArchiveOrder().subscribe(
      item => {
        this.archiveOrderTable = item;
        console.log(this.archiveOrderTable)
      }
    )
  }

  getMangaArchiveOrder(){
    this.ArchiveOrderServive.getMangaArchiveOrder().subscribe(
      item => {
        this.mangaArchiveOrderTable = item;
      }
    )
  }
  showPacks(){
    if(this.conditionPacks === false){
      this.conditionPacks = !this.conditionPacks;
      this.conditionMangas = false;
      this.conditionUsers = false;
    }
  }

  showMangas(){
    if(this.conditionMangas === false){
      this.conditionMangas = !this.conditionMangas;
      this.conditionPacks = false;
      this.conditionUsers = false;
    }  
  }

  showUsers(){
    if(this.conditionUsers === false){
      this.conditionUsers = true;
      this.conditionPacks = false;
      this.conditionMangas = false;
    }
  }

  underlinePack(){
    return this.conditionPacks ? 'underline' : '';
  }

  underlineManga(){
    return this.conditionMangas ? 'underline' : '';
  }
  underlineUser(){
    return this.conditionUsers ? 'underline' : '';
  }
}
