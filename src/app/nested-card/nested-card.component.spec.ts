import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCardComponent } from './nested-card.component';

describe('NestedCardComponent', () => {
  let component: NestedCardComponent;
  let fixture: ComponentFixture<NestedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
