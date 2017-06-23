import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Modulo, Curso, CourseService } from './../../services/course.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'course',
  templateUrl: './course.component.html'
})

export class CourseComponent{
  loaded: boolean;
  curso: Curso;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {
    this.loaded = false;
  }

  ngOnInit(){
    window.scrollTo(0, 0);
    this.route.params
    .switchMap((params: Params) =>
    this.courseService.getCurso(params['1']))
    .subscribe((curso: Curso) => this.curso = curso);
  }
}
