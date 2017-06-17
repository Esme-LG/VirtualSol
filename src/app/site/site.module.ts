import { NgModule }       from '@angular/core';

import { SiteComponent }    from './site.component';
import { SiteHomeComponent }  from './components/site-home.component';
import { CourseComponent } from "./components/course.component";
import { HelpComponent } from './components/help.component';

import { SiteRoutingModule } from './site-routing.module';

@NgModule({
  imports: [
    SiteRoutingModule
  ],
  declarations: [
    SiteComponent,
    SiteHomeComponent,
    CourseComponent,
    HelpComponent
  ],
  providers: [  ]
})
export class SiteModule {}
