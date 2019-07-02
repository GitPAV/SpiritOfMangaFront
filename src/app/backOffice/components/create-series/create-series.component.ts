import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserServiceService} from '../../../services/user-service.service'


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
    private userService: UserServiceService
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
    this.userService.getTypes().subscribe(
      types => { this.types = types;
    });

    this.userService.getGenres().subscribe(genres => {
      this.genres = genres;
          console.log(genres);
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
    console.log(this.displayKind);
    console.log(this.kindlist);
  }

  deletAKind(i) {
    event.preventDefault();
    this.displayKind.splice(i, 1);
    this.kindlist.splice(i, 1);
    console.log(this.displayKind);
    console.log(this.kindlist);
  }


  onSubmit() {
    //Call the observable in service with the apropiate http method 
    this.postSeriesForm.value.kinds = this.kindlist;
    console.log(this.postSeriesForm.value);
    const seriesRoute = 'http://localhost:4242/series/manage-series';
    this.userService.testPost(this.postSeriesForm.value, seriesRoute).subscribe();
    this.postSeriesForm.reset();
    this.displayKind = [];
    this.kindlist = [];
  }


}

