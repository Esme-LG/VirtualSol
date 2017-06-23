import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class Noticia{
  id: string;
  news_title: string;
  news_content: string;
  news_author: string;
  image_file_name: string;
  image_url: string;
}

@Injectable()
export class NewsService{
  constructor(private http: Http){}

  getNoticias(): Observable<Noticia[]> {
    return this.http.get("https://pseesapinews.herokuapp.com/news")
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNoticia(id: string): Observable<Noticia> {
    return this.http.get("https://pseesapinews.herokuapp.com/news/" + id)
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
