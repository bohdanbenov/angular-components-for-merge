import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtextComponent } from './htext.component';

describe('HtextComponent', () => {
  let component: HtextComponent;
  let fixture: ComponentFixture<HtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
