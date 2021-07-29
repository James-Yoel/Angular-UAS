import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: boolean;
  constructor(
  ) { }

  ngOnInit() {}

  getLoginStatus() {
    var token = localStorage.getItem('access_token');
    if (token == null) {
      this.user = false;
    } else {
      this.user = true;
    }
    console.log(this.user); 
    return this.user;
  }
}
