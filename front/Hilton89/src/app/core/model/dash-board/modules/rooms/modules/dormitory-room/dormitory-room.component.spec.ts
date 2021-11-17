import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryRoomComponent } from './dormitory-room.component';

describe('DormitoryRoomComponent', () => {
  let component: DormitoryRoomComponent;
  let fixture: ComponentFixture<DormitoryRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DormitoryRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DormitoryRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
