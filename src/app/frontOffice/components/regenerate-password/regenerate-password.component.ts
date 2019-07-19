import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-regenerate-password',
  templateUrl: './regenerate-password.component.html',
  styleUrls: ['./regenerate-password.component.scss']
})
export class RegeneratePasswordComponent implements OnInit {
  sendEmailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.sendEmailForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  onSubmit(){
    this.loginService.regeneratePassword(this.sendEmailForm.value).subscribe()
  }

}
