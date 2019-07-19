import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserServiceService} from '../../../services/user-service.service';
import { emailValidator, firstnameValidator, lastnameValidator, passwordValidator, 
streetNumberValidator, streetValidator, cityValidator, zipValidator } from '../../../common/validators/users.validator';

@Component({
  selector: 'app-form',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit{

  postUserForm = this.fb.group({
    pseudo: [''],
    firstname: ['', [Validators.required, firstnameValidator()]],
    lastname: ['', [Validators.required, lastnameValidator()]],
    password: ['', [Validators.required, passwordValidator()]],
    checkPassword: ['', Validators.required],
    forgetPassword: [''],
    email: ['', [Validators.required, emailValidator()]],
    telephone: [''],
    numRue: ['', [Validators.required, streetNumberValidator()]],
    rue: ['', [Validators.required, streetValidator()]],
    ville: ['', [Validators.required, cityValidator()]],
    cp: ['', [Validators.required, zipValidator()]],
    newsletter: ['', Validators.required],
    connaissance: ['', Validators.required],
    droits: [''], 
  });

  ngOnInit() {

    
    console.log("ok")
  }
 
  constructor(private fb: FormBuilder, private userService: UserServiceService, private router: Router) { }
  
  // Random string for forgetPassword formValue

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
    
    if (this.postUserForm.invalid){
      console.log(this.postUserForm.value);
      alert("Formulaire invalide, veuillez entrer tous les champs requis.")
    }  else {
      
      // let forgotKey = this.randomString()
      if ( this.postUserForm.value.telephone === ''){
        this.postUserForm.patchValue({
          telephone: 0,
        })
      }

      this.postUserForm.patchValue({
          forgetPassword : 'test',
          droits : 'users',
        })
    
        this.postUserForm.controls.checkPassword.disable()
        console.log("coucou")
    
        const profileRoute = 'http://localhost:4242/users/create-profile';
        this.userService.userPost(profileRoute, this.postUserForm.value ).subscribe()
        
        if (confirm("Votre compte a bien été crée! Voulez-vous vous connecter maintenant ?")) {
          this.router.navigate(['front/user-login'])
        }
        this.postUserForm.reset()
      }
    }


}