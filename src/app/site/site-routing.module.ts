import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from './site.component';
import { SiteHomeComponent } from './components/site-home.component';
import { CourseComponent } from "./components/course.component";
import { HelpComponent } from './components/help.component';
import { ModuloComponent } from './components/modulo.component';
import { NewsComponent } from './components/news.component';
import { TestComponent } from './components/test.component';
import { OverviewComponent } from './components/overview.component';
import { ResultComponent } from './components/result.component';

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
      },
      {
        path: 'module',
        component: ModuloComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'result',
        component: ResultComponent
      },
      {
        path: ':id',
        component: NewsComponent
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
