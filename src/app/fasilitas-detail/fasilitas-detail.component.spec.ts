import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasilitasDetailComponent } from './fasilitas-detail.component';

describe('FasilitasDetailComponent', () => {
  let component: FasilitasDetailComponent;
  let fixture: ComponentFixture<FasilitasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasilitasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasilitasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
