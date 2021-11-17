import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddingDataRoutingModule } from './adding-data-routing.module';
import { AddingDataComponent } from './adding-data.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AddingDataComponent
  ],
  imports: [
    CommonModule,
    AddingDataRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class AddingDataModule { }
