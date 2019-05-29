import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserServiceService} from '../../../services/user-service.service';


@Component({
  selector: 'app-create-series',
  templateUrl: './create-series.component.html',
  styleUrls: ['./create-series.component.scss']
})
export class CreateSeriesComponent implements OnInit {

  postSeriesForm = this.fb.group({
    titleSeries: ['', Validators.required],
    imageSeries: ['', Validators.required],
    typeSeries: ['', Validators.required],
    descritpionSeries: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    //Call the observable in service with the apropiate http method 

    const seriesRoute = 'series/create-serie';
    this.userService.testPost(this.postSeriesForm.value, seriesRoute).subscribe();
  }

}
