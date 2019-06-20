import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginService.loginPost(this.loginForm.value)
    .then( res => {
      console.log('response' + res);
      localStorage.setItem("token", res);
      console.log('toto',localStorage.getItem("token"));
    }/* can make another get or send email to user or...*/)
    .catch( error => {
      console.error(error);
    });
  }

}
