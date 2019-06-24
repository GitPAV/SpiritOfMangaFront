import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MangaDataService } from 'src/app/services/manga-data.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-create-manga',
  templateUrl: './create-manga.component.html',
  styleUrls: ['./create-manga.component.scss']
})
export class CreateMangaComponent implements OnInit {
  mangaForm: FormGroup;
  series = [];
  publics = [];
  mangas = [];
  mangaToDelete;

  constructor(private fb: FormBuilder, 
    private mangaService: MangaDataService,
    private seriesService: SeriesService) { }

  ngOnInit() {
    this.formInit();
    this.seriesService.getSeries()
      .subscribe(series => {
        this.series = series;
    });

    this.mangaService.getPublics()
      .subscribe(publics => {
        this.publics = publics;
    });
  }

  formInit() {
    this.mangaForm = this.fb.group({
      series_id:['',Validators.required],
      publics_id:['',Validators.required],
      title:['',Validators.required],
      photoCover:['',Validators.required],
      tome:['',Validators.required],
      auteur:['',Validators.required],
      editeur:[''],
      resume:['',[Validators.required, Validators.minLength(8)]],
      prixNeuf:['',Validators.required],
      weight:['',Validators.required],
    });
  }

  onSubmit() {
    this.mangaService.postManga(this.mangaForm.value).subscribe();
    this.formInit();
  }

  delete(manga){
    this.mangaService.delete(manga.id).subscribe( _ => {
      this.mangas = this.mangas.filter(eachmanga => eachmanga.id != manga.id);
    });
  }
}
