import { Component, OnInit } from '@angular/core';
import { PelayanApiServiceService } from '../shared/pelayan-api-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public formRegis: any;
  public user_name: string;
  public password: string;
  public remember_me: boolean;

  constructor(
    private pelayan: PelayanApiServiceService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formRegis = this.formBuilder.group({
      user_name: ['', Validators.required],
      telepon: ['', Validators.required],
      email: ['', Validators.required],
      nama_lengkap: ['', Validators.required],
      alamat: ['', Validators.required],
      tanggal_lahir: ['', Validators.required],
      foto: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  regisSubmit() {
    let user_name = this.formRegis.value.user_name;
    let telepon = this.formRegis.value.telepon;
    let email = this.formRegis.value.email;
    let nama_lengkap = this.formRegis.value.nama_lengkap;
    let alamat = this.formRegis.value.alamat;
    let tanggal_lahir = this.formRegis.value.tanggal_lahir;
    let foto = this.formRegis.value.foto;
    let password = CryptoJS.SHA512(this.formRegis.value.password).toString();
    
    let formRegistrasi = {
      'user_name': user_name,
      'telepon': telepon,
      'email': email,
      'nama_lengkap': nama_lengkap,
      'alamat': alamat,
      'tanggal_lahir':tanggal_lahir,
      'foto': foto,
      'password': password
    }
    this.pelayan.registrasi(formRegistrasi).subscribe(res => console.log(res),
    error => console.log(error));

    this.user_name = user_name;
    this.password = password;
    this.remember_me = true;
    alert('Registration Sucess !!');
  }
}
