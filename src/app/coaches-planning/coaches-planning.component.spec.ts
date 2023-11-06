import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesPlanningComponent } from './coaches-planning.component';

describe('CoachesPlanningComponent', () => {
  let component: CoachesPlanningComponent;
  let fixture: ComponentFixture<CoachesPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesPlanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
