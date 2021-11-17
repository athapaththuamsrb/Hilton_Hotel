import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleBedRoomComponent } from './single-bed-room.component';

const routes: Routes = [{ path: '', component: SingleBedRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleBedRoomRoutingModule { }
