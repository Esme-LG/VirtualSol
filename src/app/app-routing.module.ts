import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecoverComponent } from "./otros/recover.component";
import { RecoverRequestComponent } from "./otros/recover-request.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/site', pathMatch: 'full'},
  { path: 'recover', component: RecoverComponent},
  { path: 'recoverRequest', component: RecoverRequestComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
