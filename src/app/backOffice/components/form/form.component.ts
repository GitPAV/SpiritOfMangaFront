import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserServiceService} from '../../../services/user-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  postUserForm = this.fb.group({
    pseudo: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    forgetPassword: ['', Validators.required],
    email: ['', Validators.required],
    numRue: ['', Validators.required],
    rue: ['', Validators.required],
    ville: ['', Validators.required],
    cp: ['', Validators.required],
    newsletter: ['', Validators.required],
    connaissance: ['', Validators.required],
    droits: ['', Validators.required],
  });


  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  onSubmit() {
    //Call the observable in service with the apropiate http method 

    const profileRoute = 'users/create-profile';
    this.userService.testPost(this.postUserForm.value, profileRoute).subscribe()
  }

}
