import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecoverComponent } from "./otros/recover.component";
import { RecoverRequestComponent } from "./otros/recover-request.component";
import { SigninComponent } from "./otros/signin.component";
import { SignupComponent } from "./otros/signup.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/site', pathMatch: 'full'},
  { path: 'recover', component: RecoverComponent},
  { path: 'recoverRequest', component: RecoverRequestComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component:  SignupComponent}
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
