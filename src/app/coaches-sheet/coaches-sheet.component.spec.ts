import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesSheetComponent } from './coaches-sheet.component';

describe('CoachesSheetComponent', () => {
  let component: CoachesSheetComponent;
  let fixture: ComponentFixture<CoachesSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
