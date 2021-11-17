import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDataComponent } from './adding-data.component';

describe('AddingDataComponent', () => {
  let component: AddingDataComponent;
  let fixture: ComponentFixture<AddingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
