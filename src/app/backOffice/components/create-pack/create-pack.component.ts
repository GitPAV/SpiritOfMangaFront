import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserServiceService} from '../../../services/user-service.service';


@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrls: ['./create-pack.component.scss']
})
export class CreatePackComponent implements OnInit {

  createPackForm = this.fb.group({
    namePack: ['', Validators.required],
    photoPack: ['', Validators.required],
    resumePack: ['', Validators.required],
    stock: ['', Validators.required],
    weight: ['', Validators.required],
    prixPublic: ['', Validators.required],
    promo: ['', Validators.required],
    prixPromo: ['', Validators.required],
    statesPack_id: ['', Validators.required],
    notrePrix: ['', Validators.required],
    tomes: ['', Validators.required],
  });

  states = [];

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {

    this.userService.getStates()
      .subscribe(states => {
        this.states = JSON.parse(states);
        console.log(states);
      });
  }



  onSubmit() {
    // Call the observable in service with the apropiate http method

    const seriesRoute = 'packs/manage-packs';
    this.userService.testPost(this.createPackForm.value, seriesRoute).subscribe();
    this.createPackForm.reset();
  }



}
