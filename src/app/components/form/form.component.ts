import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { UserServiceService} from '../../services/user-service.service'

import { emailValidator, pseudoValidator, firstnameValidator, lastnameValidator, passwordValidator  } from '../../shared/validators/email.validator'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  postUserForm = this.fb.group({
    pseudo: ['', [Validators.required, pseudoValidator()]],
    firstname: ['', [Validators.required], firstnameValidator()],
    lastname: ['', [Validators.required, lastnameValidator()]],
    password: ['', [Validators.required, passwordValidator ()]],
    checkPassword: ['', Validators.required],
    //forgetPassword: ['', Validators.required], ah push avc la request
    email: ['', [Validators.required, emailValidator()]],
    telephone: [''],
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

    this.userService.testPost(this.postUserForm.value).subscribe()
  }

}
