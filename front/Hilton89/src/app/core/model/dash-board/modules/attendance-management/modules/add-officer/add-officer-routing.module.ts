import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfficerComponent } from './add-officer.component';

const routes: Routes = [{ path: '', component: AddOfficerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOfficerRoutingModule { }
