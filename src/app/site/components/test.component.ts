import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Evaluacion, TestService } from './../../services/test.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent {
  loaded: boolean;
  evaluacion: Evaluacion;
  list: Array<string> = ['simple', 'multiple', 'link'];

  constructor(private route: ActivatedRoute, private router: Router, private testService: TestService) {
    this.loaded = false;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params
      .switchMap((params: Params) =>
        this.testService.getEvaluacion(params['id']))
      .subscribe((evaluacion: Evaluacion) => this.evaluacion = evaluacion);
  }
}
