import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbuttonComponent } from './mbutton.component';

describe('MbuttonComponent', () => {
  let component: MbuttonComponent;
  let fixture: ComponentFixture<MbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
