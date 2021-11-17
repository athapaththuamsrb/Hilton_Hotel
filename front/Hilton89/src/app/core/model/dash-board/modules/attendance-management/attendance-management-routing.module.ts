import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceManagementComponent } from './attendance-management.component';

const routes: Routes = [{ path: '', component: AttendanceManagementComponent },
  { path: 'addOfficer', loadChildren: () => import('./modules/add-officer/add-officer.module').then(m => m.AddOfficerModule) },
  { path: 'removeOfficer', loadChildren: () => import('./modules/remove-officer/remove-officer.module').then(m => m.RemoveOfficerModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceManagementRoutingModule { }
