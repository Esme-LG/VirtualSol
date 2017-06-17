import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecoverComponent } from "./otros/recover.component";
import { RecoverRequestComponent } from "./otros/recover-request.component";
import { SigninComponent } from "./otros/signin.component";
import { SignupComponent } from "./otros/signup.component";

import { AppRoutingModule } from './app-routing.module';
import { SiteModule } from "./site/site.module";

@NgModule({
  declarations: [
    AppComponent,
    RecoverComponent,
    RecoverRequestComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    SiteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
