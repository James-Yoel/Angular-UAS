import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasilitasListComponent } from './fasilitas-list.component';

describe('FasilitasListComponent', () => {
  let component: FasilitasListComponent;
  let fixture: ComponentFixture<FasilitasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasilitasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasilitasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
