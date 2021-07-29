import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  public result: any;
  constructor() { }

  ngOnInit() {
    this.result = JSON.parse(localStorage.getItem('form'));
  }

  deleteBooking(kode: string) {
    localStorage.removeItem('form');
    alert('Delete Success !');
  }
}
