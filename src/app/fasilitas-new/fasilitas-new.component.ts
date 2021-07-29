import { Component, OnInit } from '@angular/core';
import { PelayanApiServiceService  } from '../shared/pelayan-api-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fasilitas-new',
  templateUrl: './fasilitas-new.component.html',
  styleUrls: ['./fasilitas-new.component.css']
})
export class FasilitasNewComponent implements OnInit {

  public token: any;
  public formAdd: any;


  constructor(
    private pelayan: PelayanApiServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('access_token');
    this.formAdd = this.formBuilder.group({
      kode: ['', Validators.required],
      nama: ['', Validators.required],
      fakultas: ['', Validators.required],
      gambar: ['', Validators.required],
      deskripsi: ['', Validators.required],
      jam_buka: ['', Validators.required],
      jam_tutup: ['', Validators.required]
    });
  }

  submitAdd() {
    let kode = this.formAdd.value.kode;
    let nama = this.formAdd.value.nama;
    let fakultas = this.formAdd.value.fakultas;
    let gambar = this.formAdd.value.gambar;
    let deskripsi = this.formAdd.value.deskripsi;
    let jam_buka = this.formAdd.value.jam_buka;
    let jam_tutup = this.formAdd.value.jam_tutup;

    let formAdd = {
      'kode': kode,
      'nama': nama,
      'fakultas': fakultas,
      'gambar': gambar,
      'deskripsi': deskripsi,
      'jam_buka': jam_buka,
      'jam_tutup': jam_tutup,
      'token': this.token
    };
    console.log(formAdd);
    this.http.post(`https://umn-pti2019.herokuapp.com/api/perpustakaan`,
    {
      'kode': kode,
      'nama': nama,
      'fakultas': fakultas,
      'gambar': gambar,
      'deskripsi': deskripsi,
      'jam_buka': jam_buka,
      'jam_tutup': jam_tutup,
      'token': this.token
    }).subscribe(res => {
      console.log(res), alert('Add Fasilitas Sukses!');
    }, error => console.log(error));
  }
}
