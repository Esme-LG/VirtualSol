import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Noticia, NewsService } from './../../services/news.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'news',
  templateUrl: './news.component.html'
})
export class NewsComponent {
  loaded: boolean;
  noticia: Noticia;

  constructor(private route: ActivatedRoute, private router: Router, private newsService: NewsService) {
    this.loaded = false;
  }

  ngOnInit(){
    window.scrollTo(0, 0);
    this.route.params
    .switchMap((params: Params) =>
    this.newsService.getNoticia(params['id']))
    .subscribe((noticia: Noticia) => this.noticia = noticia);
  }
}
