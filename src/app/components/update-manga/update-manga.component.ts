import { Component, OnInit } from '@angular/core';
import { MangaDataService } from 'src/app/services/manga-data.service';

@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.component.html',
  styleUrls: ['./update-manga.component.scss']
})
export class UpdateMangaComponent implements OnInit {
  mangas = [];
  title;
  picture;
  chosenManga = [];

  constructor(private mangaService: MangaDataService) { }

  ngOnInit() {
    this.mangaService.getMangas()
      .subscribe(mangas => {
        this.mangas = mangas;
      })
  }

  update(manga){
    console.log(manga);
    this.mangaService.updateManga(manga).subscribe();
  }

  getChosenManga(event):void {
    this.chosenManga = event;
    console.log(this.chosenManga);
  }

}
