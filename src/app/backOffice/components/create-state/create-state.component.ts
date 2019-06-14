import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-create-state',
  templateUrl: './create-state.component.html',
  styleUrls: ['./create-state.component.scss']
})
export class CreateStateComponent implements OnInit {

  inputEtat: string;
  stateUrl= "http://localhost:4242/states/manage-states"

  constructor(private etatService: UserServiceService) { }

  ngOnInit() {
  }

  sendEtat(){
    console.log(this.inputEtat)
    this.etatService.testPost(this.inputEtat,this.stateUrl).subscribe();
  }

}
