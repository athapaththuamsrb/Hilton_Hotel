import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogOutRoutingModule } from './log-out-routing.module';
import { LogOutComponent } from './log-out.component';


@NgModule({
  declarations: [
    LogOutComponent
  ],
  imports: [
    CommonModule,
    LogOutRoutingModule
  ]
})
export class LogOutModule { }
