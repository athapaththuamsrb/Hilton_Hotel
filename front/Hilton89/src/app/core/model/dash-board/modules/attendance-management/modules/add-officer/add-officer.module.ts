import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOfficerRoutingModule } from './add-officer-routing.module';
import { AddOfficerComponent } from './add-officer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [
    AddOfficerComponent
  ],
  imports: [
    CommonModule,
    AddOfficerRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class AddOfficerModule { }
