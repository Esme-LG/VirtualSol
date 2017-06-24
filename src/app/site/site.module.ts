import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SiteComponent }    from './site.component';
import { SiteHomeComponent }  from './components/site-home.component';
import { CourseComponent } from "./components/course.component";
import { HelpComponent } from './components/help.component';
import { ModuloComponent } from './components/modulo.component';
import { NewsComponent } from './components/news.component';
import { TestComponent } from './components/test.component';
import { OverviewComponent } from './components/overview.component';
import { ResultComponent } from './components/result.component';

import { SiteRoutingModule } from './site-routing.module';
import { NewsService } from './../services/news.service';
import { CourseService } from './../services/course.service';
import { TestService } from './../services/test.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SiteRoutingModule
  ],
  declarations: [
    SiteComponent,
    SiteHomeComponent,
    CourseComponent,
    HelpComponent,
    ModuloComponent,
    NewsComponent,
    TestComponent,
    OverviewComponent,
    ResultComponent
  ],
  providers: [
    NewsService,
    CourseService,
    TestService
  ]
})
export class SiteModule {}
