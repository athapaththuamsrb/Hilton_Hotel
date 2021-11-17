import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingDataComponent } from './adding-data.component';

const routes: Routes = [{ path: '', component: AddingDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddingDataRoutingModule { }
