import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { emailValidator, firstnameValidator, lastnameValidator, passwordValidator, 
  streetNumberValidator, streetValidator, cityValidator, zipValidator } from '../../../common/validators/users.validator';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
  
  show:boolean;

  postUserForm = this.fb.group({
    pseudo: [''],
    firstname: ['', [firstnameValidator()]],
    lastname: ['', [lastnameValidator()]],
    password: ['', [passwordValidator ()]],
    checkPassword: ['',],
    forgetPassword: [''],
    email: ['', [ emailValidator()]],
    telephone: [''],
    numRue: ['', [streetNumberValidator()]],
    rue: ['', [ streetValidator()]],
    ville: ['', [ cityValidator()]],
    cp: ['', [ zipValidator()]],
    newsletter: [''],
    connaissance: [''],
    droits: [''], 
  });

  constructor(private fb: FormBuilder, private router : Router) { }

  ngOnInit() {
    
  }

  display() {
    console.log(this.show);
    
    this.show = !this.show;
    console.log(this.show);
    
  }

  disconnect(){
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

}
