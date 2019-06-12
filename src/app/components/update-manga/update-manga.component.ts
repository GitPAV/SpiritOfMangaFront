import { Component, OnInit } from '@angular/core';
import { MangaDataService } from 'src/app/services/manga-data.service';
import { Mangas } from './../../common/models/manga.model';

@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.component.html',
  styleUrls: ['./update-manga.component.scss']
})
export class UpdateMangaComponent implements OnInit {
  mangas : Mangas[] = [];
  title;
  picture;
  chosenManga = [];
  publics = [];
  series = [];

  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
      this.mangaService.getPublics()
        .subscribe(publics => {
          this.publics = publics;
      })

        this.mangaService.getSeries()
        .subscribe(series => {
          this.series = series;
      });
  }
  
  getChosenManga(event):void {
    this.chosenManga = event;
    const test = this.mangaService.getSeriePublicByManga('Test').subscribe();
    console.log(test);
  }
  
  update(manga){
    this.mangaService.updateManga(manga).subscribe();
  }

  delete(manga){
    this.mangaService.delete(manga.id).subscribe();
    this.chosenManga = [];
  }


}
