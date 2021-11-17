import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { AuthenticationContextComponent } from './core/authentication/authentication-context/authentication-context.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';
import {LocalStorageModule} from "angular-2-local-storage";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticationContextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    LocalStorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
