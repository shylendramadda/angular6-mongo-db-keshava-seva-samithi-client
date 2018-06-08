import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/login/loginservice.service';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User;
  submitted = false;
  constructor(private loginservice: LoginService,
    private location: Location) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save(): void {
    this.loginservice.doLogin(this.user)
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

}
