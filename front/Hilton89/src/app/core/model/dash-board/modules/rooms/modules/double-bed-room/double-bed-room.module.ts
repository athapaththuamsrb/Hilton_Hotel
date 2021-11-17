import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoubleBedRoomRoutingModule } from './double-bed-room-routing.module';
import { DoubleBedRoomComponent } from './double-bed-room.component';
import {RoomsModule} from "../../rooms.module";


@NgModule({
  declarations: [
    DoubleBedRoomComponent
  ],
    imports: [
        CommonModule,
        DoubleBedRoomRoutingModule,
      RoomsModule
    ]
})
export class DoubleBedRoomModule { }
