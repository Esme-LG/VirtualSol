 import { Injectable }              from '@angular/core';
  import { Http, Response }          from '@angular/http';
  import { Headers, RequestOptions } from '@angular/http';

  import { Course } from './course.class';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/operator/map';

  @Injectable()
  export class CourseService {

    constructor(private http: Http) { }
    private headers = new Headers({ 'Content-Type': 'application/json' });

    getCourse(): Observable<Course> {
      return this.http.get("https://pseesapicursos.herokuapp.com/courses/1?include=modules")
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      return body || {};
    }

    private handleError(error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
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
