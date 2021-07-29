import { Component, OnInit } from '@angular/core';
import { PelayanApiServiceService } from '../shared/pelayan-api-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as CryptoJS from 'crypto-js';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: any;
  public loggedOn: boolean;

  constructor(
    public pelayan: PelayanApiServiceService,
    public jwtHelper: JwtHelperService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  userLogin() {
    var username = this.loginForm.value.username;
    var password = CryptoJS.SHA512(this.loginForm.value.password).toString()
    var remember_me = true;

    var loginValue = {
      'user_name': username,
      'password': password,
      'remember_me': remember_me
    };

    this.pelayan.login(loginValue.user_name, loginValue.password, loginValue.remember_me).subscribe(
      data => {
        this.router.navigate(['fasilitas']);
        localStorage.setItem('token', data['token']);
      }
    )
    this.loggedOn = true;
    localStorage.setItem('loggedOn', JSON.stringify(this.loggedOn));
  }
}
