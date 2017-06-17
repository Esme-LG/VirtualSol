import { NgModule }       from '@angular/core';

import { SiteComponent }    from './site.component';
import { SiteHomeComponent }  from './components/site-home.component';

import { SiteRoutingModule } from './site-routing.module';

@NgModule({
  imports: [
    SiteRoutingModule
  ],
  declarations: [
    SiteComponent,
    SiteHomeComponent
  ],
  providers: [  ]
})
export class SiteModule {}
