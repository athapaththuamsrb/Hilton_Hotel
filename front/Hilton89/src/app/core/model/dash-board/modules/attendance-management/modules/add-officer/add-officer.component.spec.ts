import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficerComponent } from './add-officer.component';

describe('AddOfficerComponent', () => {
  let component: AddOfficerComponent;
  let fixture: ComponentFixture<AddOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
