import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MangaDataService } from 'src/app/services/manga-data.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-create-manga',
  templateUrl: './create-manga.component.html',
  styleUrls: ['./create-manga.component.scss']
})
export class CreateMangaComponent implements OnInit {
  mangaForm: FormGroup;
  series = [];
  publics = [];
  mangaToadd;

  constructor(private fb: FormBuilder, private mangaService: MangaDataService, private postService: UserServiceService) { }

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
      series_id:['',Validators.required],
      publics_id:['',Validators.required],
      title:['',Validators.required],
      photoCover:['',Validators.required],
      tome:['',Validators.required],
      auteur:['',Validators.required],
      editeur:[''],
      resume:['',Validators.required],
      prixNeuf:['',Validators.required],
      stockTotal:['',Validators.required],
      weight:['',Validators.required],
    });
  }

  onSubmit() {
    const route = "mangas/create-manga";
    this.mangaToadd = this.mangaForm.value;
    this.mangaToadd.series_id = +this.mangaToadd.series_id;
    this.mangaToadd.publics_id = +this.mangaToadd.publics_id;
    
    console.log(this.mangaToadd);
    this.postService.testPost(this.mangaForm.value, route).subscribe();
  }
}
