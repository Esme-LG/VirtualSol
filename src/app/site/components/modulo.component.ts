import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Modulo, CourseService } from './../../services/course.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'modulo',
  templateUrl: './modulo.component.html'
})
export class ModuloComponent {
  loaded: boolean;
  modulo: Modulo;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {
    this.loaded = false;
  }

  ngOnInit(){
    window.scrollTo(0, 0);
    this.route.params
    .switchMap((params: Params) =>
    this.courseService.getModulo(params['id']))
    .subscribe((modulo: Modulo) => this.modulo = modulo);
  }
}
