import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesFormComponent } from './coaches-form.component';

describe('CoachesFormComponent', () => {
  let component: CoachesFormComponent;
  let fixture: ComponentFixture<CoachesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
