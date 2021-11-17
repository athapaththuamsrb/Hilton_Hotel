import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/authentication/login/login.component";
import {AuthenticationContextComponent} from "./core/authentication/authentication-context/authentication-context.component";

const routes: Routes = [{path: '', redirectTo: '/auth', pathMatch: 'full'},
                        {path: 'auth', component: AuthenticationContextComponent, children: [
                                      {path: 'login', component: LoginComponent}      ]},
                        { path: 'dashboard', loadChildren: () => import('./core/model/dash-board/dash-board.module').then(m => m.DashBoardModule) },
                        { path: 'notFound', loadChildren: () => import('./core/model/not-found/not-found.module').then(m => m.NotFoundModule) },
                        {path: '**', redirectTo: '/notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
