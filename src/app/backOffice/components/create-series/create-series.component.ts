import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TypesServiceService } from 'src/app/services/types-service.service';

import { SeriesService } from '../../../services/series.service';


@Component({
  selector: 'app-create-series',
  templateUrl: './create-series.component.html',
  styleUrls: ['./create-series.component.scss']
})
export class CreateSeriesComponent implements OnInit {

  postSeriesForm = this.fb.group({
    nameSeries: ['', Validators.required],
    photoCover: ['', Validators.required],
    types_id: ['', Validators.required],
    description: ['', Validators.required],
  });

  types;

  constructor(private fb: FormBuilder, 
    private typesService: TypesServiceService,
    private seriesService: SeriesService) { }

  ngOnInit() {
    this.typesService.getTypes().subscribe(
      types => { this.types = types;
    });
  }

  onSubmit() {
    const seriesRoute = 'http://localhost:4242/series/manage-series';
    this.seriesService.seriePost(this.postSeriesForm.value, seriesRoute).subscribe();
    this.postSeriesForm.reset();
  }


}

