import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  { path: '', component: RoomsComponent },
  { path: 'singleBedRoom', loadChildren: () => import('./modules/single-bed-room/single-bed-room.module').then(m => m.SingleBedRoomModule) },
  { path: 'doubleBedRoom', loadChildren: () => import('./modules/double-bed-room/double-bed-room.module').then(m => m.DoubleBedRoomModule) },
  { path: 'dormitoryRoom', loadChildren: () => import('./modules/dormitory-room/dormitory-room.module').then(m => m.DormitoryRoomModule) },
  { path: 'booking/:number', loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule) },
  { path: 'addingData/:number', loadChildren: () => import('./modules/adding-data/adding-data.module').then(m => m.AddingDataModule) }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
