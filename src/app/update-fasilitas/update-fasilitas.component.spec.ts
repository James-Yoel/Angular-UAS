import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFasilitasComponent } from './update-fasilitas.component';

describe('UpdateFasilitasComponent', () => {
  let component: UpdateFasilitasComponent;
  let fixture: ComponentFixture<UpdateFasilitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFasilitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFasilitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
