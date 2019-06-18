import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { UserServiceService} from '../../../services/user-service.service';
import { emailValidator, pseudoValidator, firstnameValidator, lastnameValidator, passwordValidator, phoneValidator, 
streetNumberValidator, streetValidator, cityValidator, zipValidator } from '../../../common/validators/users.validator';

@Component({
  selector: 'app-form',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class FormComponent {

  postUserForm = this.fb.group({
    pseudo: ['', [Validators.required, pseudoValidator()]],
    firstname: ['', [Validators.required, firstnameValidator()]],
    lastname: ['', [Validators.required, lastnameValidator()]],
    password: ['', [Validators.required, passwordValidator ()]],
    checkPassword: ['', Validators.required],
    forgetPassword: [''],
    email: ['', [Validators.required, emailValidator()]],
    telephone: ['', phoneValidator()],
    numRue: ['', [Validators.required, streetNumberValidator()]],
    rue: ['', [Validators.required, streetValidator()]],
    ville: ['', [Validators.required, cityValidator()]],
    cp: ['', [Validators.required, zipValidator()]],
    newsletter: ['', Validators.required],
    connaissance: ['', Validators.required],
    droits: [''], 
  });


  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  randomString() {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let string_length = 20;
    let randomstring = '';
    for (let i=0; i<string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
    }  
    return randomstring
  }

  onSubmit() {
    //Call the observable in service with the apropiate http method 

    let forgotKey = this.randomString()
    this.postUserForm.patchValue({
      forgetPassword : forgotKey,
      droits : 'user',
    })
    this.postUserForm.controls.checkPassword.disable()

    console.log(this.postUserForm.controls['forgetPassword'].value)
    console.log(this.postUserForm.controls['droits'].value)

    console.log('***************' ,this.postUserForm.value)
    console.log('*value.email*' ,this.postUserForm.value.email)


    // const getEmailRoute = 'http://localhost:4242/users/get-email'
    // this.userService.userGetEmail(this.postUserForm.value.email, getEmailRoute).subscribe()


    const profileRoute = 'http://localhost:4242/users/create-profile';
    this.userService.userPost(this.postUserForm.value, profileRoute).subscribe()
  }

}
