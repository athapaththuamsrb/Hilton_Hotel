import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBedRoomComponent } from './single-bed-room.component';

describe('SingleBedRoomComponent', () => {
  let component: SingleBedRoomComponent;
  let fixture: ComponentFixture<SingleBedRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBedRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
