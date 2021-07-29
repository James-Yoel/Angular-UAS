import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PelayanApiServiceService } from '../shared/pelayan-api-service.service';
import { Fasilitas } from '../shared/fasilitas';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fasilitas-booking',
  templateUrl: './fasilitas-booking.component.html',
  styleUrls: ['./fasilitas-booking.component.css']
})
export class FasilitasBookingComponent implements OnInit {

  public fasilitas: Fasilitas;
  detailKode: string;
  public formBooking: any;
  public profile: any;
  public token: any;

  constructor(
    private pelayan: PelayanApiServiceService,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.detailKode = this.activatedRoute.snapshot.paramMap.get("kode");
    this.pelayan.getFasilitasByKode(this.detailKode).subscribe(result => {
      this.fasilitas = result;
      console.log(this.fasilitas);
    });

    this.token = localStorage.getItem('access_token');
    this.pelayan.verifikasi(this.token).subscribe(res => {
      this.profile = res;
      console.log(res);
      console.log(this.profile);
    },
    error => console.log(error));

    this.formBooking = this.formBuilder.group({
      user_name: ['', Validators.required],
      nama: ['', Validators.required],
      kode: ['', Validators.required],
      jam_pesan: ['', Validators.required],
      jam_selesai: ['', Validators.required],
      tanggal: ['', Validators.required]
    });
  }

  submitBooking() {
    let user_name = this.formBooking.value.user_name;
    let nama = this.formBooking.value.nama;
    let kode = this.formBooking.value.kode;
    let jam_pesan = this.formBooking.value.jam_pesan;
    let jam_selesai = this.formBooking.value.jam_selesai;
    let tanggal = this.formBooking.value.tanggal;

    let bookNow = {
      'user_name': user_name,
      'nama': nama,
      'kode': kode,
      'jam_pesan': jam_pesan,
      'jam_selesai': jam_selesai,
      'tanggal': tanggal
    }
    localStorage.setItem('form', JSON.stringify(bookNow));
    let retrievedForm = JSON.parse(localStorage.getItem('form'));
    console.log(retrievedForm);
    this.router.navigate(['fasilitas']);
  }
}
