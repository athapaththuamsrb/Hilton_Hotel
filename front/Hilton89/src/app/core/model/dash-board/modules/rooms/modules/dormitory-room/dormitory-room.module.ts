import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DormitoryRoomRoutingModule } from './dormitory-room-routing.module';
import { DormitoryRoomComponent } from './dormitory-room.component';
import {RoomsModule} from "../../rooms.module";


@NgModule({
  declarations: [
    DormitoryRoomComponent
  ],
  imports: [
    CommonModule,
    DormitoryRoomRoutingModule,
    RoomsModule
  ]
})
export class DormitoryRoomModule { }
