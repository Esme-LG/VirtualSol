import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from './site.component';
import { SiteHomeComponent } from './components/site-home.component';
import { CourseComponent } from "./components/course.component";
import { HelpComponent } from './components/help.component';

const siteRoutes: Routes = [
  {
    path: 'site',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: SiteHomeComponent
      },
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'help',
        component: HelpComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(siteRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SiteRoutingModule { }
