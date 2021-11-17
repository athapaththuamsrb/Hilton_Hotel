import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveOfficerRoutingModule } from './remove-officer-routing.module';
import { RemoveOfficerComponent } from './remove-officer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    RemoveOfficerComponent
  ],
  imports: [
    CommonModule,
    RemoveOfficerRoutingModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class RemoveOfficerModule { }
