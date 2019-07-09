import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { TypesServiceService } from 'src/app/services/types-service.service';
import { SeriesService } from '../../../services/series.service';
import { GenresService } from 'src/app/services/genres.service';


@Component({
  selector: 'app-create-series',
  templateUrl: './create-series.component.html',
  styleUrls: ['./create-series.component.scss']
})
export class CreateSeriesComponent implements OnInit {

  postSeriesForm: FormGroup;
  types;
  genres;
  kindlist = [];
  displayKind = [];
  
  
  constructor(
    private fb: FormBuilder,
    private typesService: TypesServiceService,
    private seriesService: SeriesService,
    private genresService: GenresService
    ) { 
          this.postSeriesForm = this.fb.group({
            nameSeries: ['', Validators.required],
            photoCover: ['', Validators.required],
            types_id: ['', Validators.required],
            kinds: [],
            description: ['', Validators.required],
          });
      }


  ngOnInit() {
    this.typesService.getTypes().subscribe(
      types => { this.types = types;
    });

    this.genresService.getGenres().subscribe(genres => {
      this.genres = genres;
    });
  }
  addAKind() {
    event.preventDefault();
    const kindId = this.postSeriesForm.value.kinds
    const kind = this.genres.find(genre=>{
      return genre.id == kindId;
    });
    this.kindlist.push(kindId);
    this.displayKind.push(kind);
  }

  deletAKind(i) {
    event.preventDefault();
    this.displayKind.splice(i, 1);
    this.kindlist.splice(i, 1);
  }


  onSubmit() {
    //Call the observable in service with the apropiate http method 
    this.postSeriesForm.value.kinds = this.kindlist;
    const seriesRoute = 'http://localhost:4242/series/manage-series';
    this.seriesService.seriePost(this.postSeriesForm.value, seriesRoute).subscribe();
    this.postSeriesForm.reset();
    this.displayKind = [];
    this.kindlist = [];
  }


}

