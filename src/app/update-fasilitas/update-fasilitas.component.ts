import { Component, OnInit } from '@angular/core';
import { PelayanApiServiceService  } from '../shared/pelayan-api-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Fasilitas } from '../shared/fasilitas';

@Component({
  selector: 'app-update-fasilitas',
  templateUrl: './update-fasilitas.component.html',
  styleUrls: ['./update-fasilitas.component.css']
})
export class UpdateFasilitasComponent implements OnInit {

  public token: any;
  public formUpdate: any;
  public fasilitas: Fasilitas;
  public detailKode: string;

  constructor(
    private pelayan: PelayanApiServiceService,
    public router: Router,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.detailKode = this.activatedRoute.snapshot.paramMap.get("kode");
    this.pelayan.getFasilitasByKode(this.detailKode).subscribe(result => {
      this.fasilitas = result;
      console.log(this.fasilitas);
    });

    this.token = localStorage.getItem('access_token');
    this.formUpdate = this.formBuilder.group({
      nama: ['', Validators.required],
      fakultas: ['', Validators.required],
      gambar: ['', Validators.required],
      deskripsi: ['', Validators.required],
      jam_buka: ['', Validators.required],
      jam_tutup: ['', Validators.required]
    });
  }

  submitUpdate() {
    let nama = this.formUpdate.value.nama;
    let fakultas = this.formUpdate.value.fakultas;
    let gambar = this.formUpdate.value.gambar;
    let deskripsi = this.formUpdate.value.deskripsi;
    let jam_buka = this.formUpdate.value.jam_buka;
    let jam_tutup = this.formUpdate.value.jam_tutup;

    let formUpdate = {
      'nama': nama,
      'fakultas': fakultas,
      'gambar': gambar,
      'deskripsi': deskripsi,
      'jam_buka': jam_buka,
      'jam_tuutp': jam_tutup,
      'token': this.token
    };
    console.log(formUpdate);
    this.pelayan.updateFasilitas(formUpdate, this.detailKode).subscribe(res => {
      console.log(res);
      alert('Fasilitas Updated!');
      this.router.navigate(['/fasilitas']);
    },
    error => console.log(error));
  }
}
