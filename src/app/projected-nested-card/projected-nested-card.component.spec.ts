import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedNestedCardComponent } from './projected-nested-card.component';

describe('ProjectedNestedCardComponent', () => {
  let component: ProjectedNestedCardComponent;
  let fixture: ComponentFixture<ProjectedNestedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectedNestedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectedNestedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
