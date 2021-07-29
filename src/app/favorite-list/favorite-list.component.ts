import { Component, OnInit } from '@angular/core';
import { PelayanApiServiceService } from '../shared/pelayan-api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  public user: any;
  public username: any;
  public favorite: any;
  public result: any;
  public info: any;
  public token: any;

  constructor(
    private pelayan: PelayanApiServiceService,
    public http: HttpClient
  ) { }

  ngOnInit() {
   this.token = localStorage.getItem('access_token');
    this.pelayan.verifikasi(this.token).subscribe(res => {
      this.info = res;
      console.log(this.info);
      this.username = this.info.result.user.user_name;
      console.log(this.username);
      this.http.get(`https:umn-pti2019.herokuapp.com/api/user/${this.username}/favorites`).subscribe(hasil => {
        this.favorite = hasil;
        console.log(this.favorite);
      },
      error => console.log(error));
    },
    error => console.log(error));
  }

  deleteFavorites(id_kode_nim_isbn_favorited: string, type: string) {
    console.log(id_kode_nim_isbn_favorited);
    let hapus = {
      'type': type,
      'id_kode_nim_isbn_favorited': id_kode_nim_isbn_favorited,
      'token': this.token
    };
    console.log(hapus);
    this.pelayan.deleteFavorite(hapus).subscribe(
      res => {
        console.log(res), alert('Delete Favorite Success !')}, error => console.log(error));
  }
}
