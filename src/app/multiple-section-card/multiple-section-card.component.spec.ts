import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSectionCardComponent } from './multiple-section-card.component';

describe('MultipleSectionCardComponent', () => {
  let component: MultipleSectionCardComponent;
  let fixture: ComponentFixture<MultipleSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleSectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
