import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoubleBedRoomComponent } from './double-bed-room.component';

const routes: Routes = [{ path: '', component: DoubleBedRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubleBedRoomRoutingModule { }
