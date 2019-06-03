import { Component, OnInit } from '@angular/core';
import { MangaDataService } from '../services/manga-data.service';

@Component({
  selector: 'app-delete-manga',
  templateUrl: './delete-manga.component.html',
  styleUrls: ['./delete-manga.component.scss']
})
export class DeleteMangaComponent implements OnInit {
  chosenManga = [];

  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
  }

  getChosenManga(event):void {
    this.chosenManga = event;
    console.log(this.chosenManga);
  }

  delete(manga){
    this.mangaService.delete(manga.id).subscribe();
    this.chosenManga = [];
  }

}
