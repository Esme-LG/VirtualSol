import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class Modulo{
  id: string;
  module_name: string;
  module_level: string;
  module_active: boolean;
  module_objective: string;
}

export class Curso{
  id: string;
  course_name: string;
  course_objetive: string;
  course_objective: string;
  course_module: any[];
}

@Injectable()
export class CourseService{
  constructor(private http: Http){}

  getCurso(id: 1): Observable<Curso> {
    return this.http.get("https://pseesapicursos.herokuapp.com/courses/1?include=modules")
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
