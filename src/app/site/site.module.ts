import { NgModule }       from '@angular/core';

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

@NgModule({
  imports: [
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
  providers: [  ]
})
export class SiteModule {}
