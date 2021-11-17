import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';

const routes: Routes = [
  { path: '', component: DashBoardComponent ,
    children:[
      {path: '/dashboard', redirectTo: 'dashboard/customer-information', pathMatch: 'full'},
    { path: 'rooms', loadChildren: () => import('./modules/rooms/rooms.module').then(m => m.RoomsModule) },
    { path: 'signUp', loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule) },
    { path: 'logOut', loadChildren: () => import('./modules/log-out/log-out.module').then(m => m.LogOutModule) },
    { path: 'attendance-management', loadChildren: () => import('./modules/attendance-management/attendance-management.module').then(m => m.AttendanceManagementModule) }]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
