import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveOfficerComponent } from './remove-officer.component';

describe('RemoveOfficerComponent', () => {
  let component: RemoveOfficerComponent;
  let fixture: ComponentFixture<RemoveOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
