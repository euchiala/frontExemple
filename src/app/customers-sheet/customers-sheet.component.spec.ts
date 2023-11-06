import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSheetComponent } from './customers-sheet.component';

describe('CustomersSheetComponent', () => {
  let component: CustomersSheetComponent;
  let fixture: ComponentFixture<CustomersSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
