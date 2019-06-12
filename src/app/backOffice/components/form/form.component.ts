import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserServiceService} from '../../../services/user-service.service';

import { emailValidator, pseudoValidator, firstnameValidator, lastnameValidator, passwordValidator, phoneValidator, 
streetNumberValidator, streetValidator, cityValidator, zipValidator  } from '../../../shared/validators/users.validator'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  postUserForm = this.fb.group({
    pseudo: ['', [Validators.required, pseudoValidator()]],
    firstname: ['', [Validators.required, firstnameValidator()]],
    lastname: ['', [Validators.required, lastnameValidator()]],
    password: ['', [Validators.required, passwordValidator ()]],
    checkPassword: ['', Validators.required],
    //forgetPassword: ['', Validators.required], a push avc la request
    email: ['', [Validators.required, emailValidator()]],
    telephone: ['', phoneValidator()],
    numRue: ['', [Validators.required, streetNumberValidator()]],
    rue: ['', [Validators.required, streetValidator()]],
    ville: ['', [Validators.required, cityValidator()]],
    cp: ['', [Validators.required, zipValidator()]],
    newsletter: ['', Validators.required],
    connaissance: ['', Validators.required],
    // droits: ['', Validators.required], a push avec la request 
  });

  

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  onSubmit() {
    //Call the observable in service with the apropiate http method 

    const profileRoute = 'http://localhost:4200/users/create-profile';
    this.userService.testPost(this.postUserForm.value, profileRoute).subscribe()
  }

}
