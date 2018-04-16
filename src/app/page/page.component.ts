import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Context } from '../prismic/context';
import { PrismicService } from '../prismic/prismic.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';
import PrismicDOM from 'prismic-dom';
import { debugOutputAstAsTypeScript, DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {
  private routeStream: Subscription;
  PrismicDOM: Object = PrismicDOM;

  ctx ?: Context;
  pageContent ?: any;
  toolbar ?: boolean = false;

  constructor(private prismic: PrismicService, private route: ActivatedRoute) {
    console.log(this.prismic.buildContext())
  }

  ngOnInit() {
    this.routeStream = this.route.params
      .map(params => params['uid'])
      .flatMap(uid => Observable.fromPromise(this.prismic.buildContext()).map(ctx => [uid, ctx]))
      .subscribe(([uid, ctx]) => {
        console.log('ctx',ctx)
        this.ctx = ctx;
        this.fetchPage(uid);
      }); 
  }

  ngOnDestroy() {
    this.routeStream.unsubscribe();
  }

  ngAfterViewChecked() {
    if(this.ctx && !this.toolbar) {
      this.prismic.toolbar(this.ctx.api);
      this.toolbar = true;
    }
  }

  fetchPage(pageUID) {
    this.ctx.api.getByUID('landing_page', 'pageUID', {})
    .then(data => {
      console.log('tyaaaa', data);
      this.toolbar = true;
      this.pageContent = data;
    })
    .catch(e => console.log('error in e', e));
  }
}