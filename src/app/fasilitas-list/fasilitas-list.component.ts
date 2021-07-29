import { Component, OnInit } from '@angular/core';
import { PelayanApiServiceService } from '../shared/pelayan-api-service.service';
import { Fasilitas } from '../shared/fasilitas';

@Component({
  selector: 'app-fasilitas-list',
  templateUrl: './fasilitas-list.component.html',
  styleUrls: ['./fasilitas-list.component.css']
})
export class FasilitasListComponent implements OnInit {

  public fasilitas: Fasilitas = null;

  constructor(
    private pelayan: PelayanApiServiceService
  ) { }

  ngOnInit() {
    this.pelayan.getAllFasilitas().subscribe(
      result => { this.fasilitas = result; },
      error => { console.log(error);
      }
    );
  }

}
