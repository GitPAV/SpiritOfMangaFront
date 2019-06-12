import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MangaDataService } from 'src/app/services/manga-data.service';

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
  mangaToadd;
  mangaToDelete;

  constructor(private fb: FormBuilder, private mangaService: MangaDataService) { }

  ngOnInit() {
    this.formInit();
    this.mangaService.getSeries()
      .subscribe(series => {
        this.series = series;
    });

    this.mangaService.getPublics()
      .subscribe(publics => {
        this.publics = publics;
    });

    this.mangaService.getMangas()
      .subscribe(mangas => {
        this.mangas = mangas;
        console.log(this.mangas)
      })
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
      resume:['',Validators.required],
      prixNeuf:['',Validators.required],
      weight:['',Validators.required],
    });
  }

  onSubmit() {
    this.mangaToadd = this.mangaForm.value;
    this.mangaToadd.series_id = +this.mangaToadd.series_id;
    this.mangaToadd.publics_id = +this.mangaToadd.publics_id;
    
    this.mangaService.postManga(this.mangaForm.value).subscribe();
    this.formInit();
  }

  delete(manga){
    this.mangaService.delete(manga.id).subscribe( _ => {
      this.mangas = this.mangas.filter(eachmanga => eachmanga.id != manga.id);
    });
  }
}
