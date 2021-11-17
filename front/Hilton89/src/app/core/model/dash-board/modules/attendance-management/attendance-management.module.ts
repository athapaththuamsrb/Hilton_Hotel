import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceManagementRoutingModule } from './attendance-management-routing.module';
import { AttendanceManagementComponent } from './attendance-management.component';
import {MatTableModule} from '@angular/material/table';
import { DataTableComponent } from './component/data-table/data-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AttendanceManagementComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    AttendanceManagementRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AttendanceManagementModule { }
