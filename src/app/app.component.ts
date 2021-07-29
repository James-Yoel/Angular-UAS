import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-uas-fasilitas';
  public loggedOn: boolean = false;

  ngOnInit() {
    localStorage.setItem('loggedOn', JSON.stringify(this.loggedOn));
  }
}


