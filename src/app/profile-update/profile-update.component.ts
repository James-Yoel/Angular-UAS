import { Component, OnInit } from '@angular/core';
import { PelayanApiServiceService  } from '../shared/pelayan-api-service.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  public profile: any;
  public formUpdate: any;
  public token: any;

  constructor(
    private pelayan: PelayanApiServiceService,
    public router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('access_token');
    this.pelayan.verifikasi(this.token).subscribe(res => {
      this.profile = res;
      console.log(res);
      console.log(this.profile);
    },
    error => console.log(error));

    this.formUpdate = this.formBuilder.group({
      nama_lengkap: ['', Validators.required],
      alamat: ['', Validators.required],
      tanggal_lahir: ['', Validators.required],
      foto: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitUpdate() {
    let nama_lengkap = this.formUpdate.value.nama_lengkap;
    let alamat = this.formUpdate.value.alamat;
    let tanggal_lahir = this.formUpdate.value.tanggal_lahir;
    let foto = this.formUpdate.value.foto;
    let password = CryptoJS.SHA512(this.formUpdate.value.password).toString();
    
    let formProfile = {
      'nama_lengkap': nama_lengkap,
      'alamat': alamat,
      'tanggal_lahir': tanggal_lahir,
      'foto': foto,
      'password': password,
      'token': this.token
    }
    console.log(formProfile);
    this.pelayan.updateProfile(formProfile).subscribe(hasil => {
      console.log(hasil);
      alert('Profile Updated!');
      this.router.navigate(['user/profile']);
    },
    error => console.log(error));
  }
}
