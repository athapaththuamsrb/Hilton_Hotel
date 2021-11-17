import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BrowserModule} from "@angular/platform-browser";
import { CardComponent } from './modules/component/card/card.component';

@NgModule({
  declarations: [
    RoomsComponent,
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    MatCardModule,
    MatButtonModule,

  ]
})
export class RoomsModule { }
