import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleBedRoomRoutingModule } from './single-bed-room-routing.module';
import { SingleBedRoomComponent } from './single-bed-room.component';
import {RoomsModule} from "../../rooms.module";


@NgModule({
  declarations: [
    SingleBedRoomComponent
  ],
    imports: [
        CommonModule,
        SingleBedRoomRoutingModule,
        RoomsModule
    ]
})
export class SingleBedRoomModule { }
