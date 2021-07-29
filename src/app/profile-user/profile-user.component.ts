import { Component, OnInit } from '@angular/core';
import { PelayanApiServiceService } from '../shared/pelayan-api-service.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  public profile: any;

  constructor(
    private pelayan: PelayanApiServiceService

  ) { }

  ngOnInit() {
    var token = localStorage.getItem('access_token');
    this.pelayan.verifikasi(token).subscribe(res => {
      this.profile = res;
      console.log(res);
      console.log(this.profile);
    },
    error => console.log(error));
  }

  logOut() {
    this.pelayan.logout();
    let loggedIn = false;
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
  }
}
