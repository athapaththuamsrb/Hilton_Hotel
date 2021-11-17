import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBedRoomComponent } from './double-bed-room.component';

describe('DoubleBedRoomComponent', () => {
  let component: DoubleBedRoomComponent;
  let fixture: ComponentFixture<DoubleBedRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleBedRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
