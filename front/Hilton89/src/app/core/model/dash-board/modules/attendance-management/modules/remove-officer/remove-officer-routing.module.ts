import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveOfficerComponent } from './remove-officer.component';

const routes: Routes = [{ path: '', component: RemoveOfficerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveOfficerRoutingModule { }
