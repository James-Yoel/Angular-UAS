import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasilitasNewComponent } from './fasilitas-new.component';

describe('FasilitasNewComponent', () => {
  let component: FasilitasNewComponent;
  let fixture: ComponentFixture<FasilitasNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasilitasNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasilitasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
