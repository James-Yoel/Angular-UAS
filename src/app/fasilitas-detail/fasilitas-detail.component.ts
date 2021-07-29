import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PelayanApiServiceService } from '../shared/pelayan-api-service.service';
import { Fasilitas } from '../shared/fasilitas';

@Component({
  selector: 'app-fasilitas-detail',
  templateUrl: './fasilitas-detail.component.html',
  styleUrls: ['./fasilitas-detail.component.css']
})
export class FasilitasDetailComponent implements OnInit {

  public fasilitas: Fasilitas;
  detailKode: string;

  constructor(
    private pelayan: PelayanApiServiceService,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.detailKode = this.activatedRoute.snapshot.paramMap.get("kode");
    this.pelayan.getFasilitasByKode(this.detailKode).subscribe(result => {
      this.fasilitas = result;
      console.log(this.fasilitas);
    });
  }

  addToFavorite(kode: string) {
    var token = localStorage.getItem('access_token');
    var formFavorite = {
      'type': 'fasilitas',
      'id_kode_nim_isbn_favorited': kode,
      'token': token
    }
    return this.http.post(`https://umn-pti2019.herokuapp.com/api/add-favorites`, formFavorite).subscribe(res => {
      console.log(res), alert('Add to Favourite Success !')}, 
    err => console.log(err));

  }

}
