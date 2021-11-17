import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DormitoryRoomComponent } from './dormitory-room.component';

const routes: Routes = [{ path: '', component: DormitoryRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DormitoryRoomRoutingModule { }
