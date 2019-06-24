import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  userMail: string;
  @Output() mailSender = new EventEmitter()

  constructor(private fb: FormBuilder, 
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginService.loginPost(this.loginForm.value)
    .then( res => {
      localStorage.setItem("token", res);
      this.loginService.protectPost().then( (res) => {        
        this.loginService.login();
        this.userMail = this.loginForm.get('email').value;
        this.mailSender.emit(this.userMail)
        this.router.navigate(['/create-pack'])
      } )
    }/* can make another get or send email to user or...*/)
    .catch( error => {
      console.error(error);
      alert('Mauvais email ou mot de passe')
      this.router.navigate(['/form-user'])
    });
  }

}
