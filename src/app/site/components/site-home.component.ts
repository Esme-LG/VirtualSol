import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { Noticia, NewsService } from './../../services/news.service';

@Component({
  selector: 'site-home',
  templateUrl: './site-home.component.html'
})
export class SiteHomeComponent {
  loaded: boolean;
  noticias: Noticia[];

  constructor(private router: Router, private newsService: NewsService) {
    this.loaded = false;
  }

  ngOnInit(){
    window.scrollTo(0, 0);
    this.newsService.getNoticias().subscribe(
      noticias => {
        this.noticias = noticias;
      });
  }
}
