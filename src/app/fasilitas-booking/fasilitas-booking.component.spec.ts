import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasilitasBookingComponent } from './fasilitas-booking.component';

describe('FasilitasBookingComponent', () => {
  let component: FasilitasBookingComponent;
  let fixture: ComponentFixture<FasilitasBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasilitasBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasilitasBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
