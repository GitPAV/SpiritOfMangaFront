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

  constructor(private fb: FormBuilder, private mangaService: MangaDataService) { }

  ngOnInit() {
    this.formInit();
    this.mangaService.getSeries()
      .subscribe(series => {
        this.series = series;
        console.log(this.series)

    });
    this.mangaService.getPublics()
      .subscribe(publics => {
        this.publics = publics;
        console.log(this.publics)
    });
  }

  formInit() {
    this.mangaForm = this.fb.group({
      serie:['',Validators.required],
      public:['',Validators.required],
      title:['',Validators.required],
      photoCover:['',Validators.required],
      tome:['',Validators.required],
      auteur:['',Validators.required],
      editeur:[''],
      resume:['',Validators.required],
      prixNeuf:['',Validators.required],
      stock:['',Validators.required],
      weight:['',Validators.required],
    });
  }
}
