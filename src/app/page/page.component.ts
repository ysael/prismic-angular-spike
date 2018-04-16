import { Component, OnInit, OnDestroy, SimpleChanges, AfterViewChecked } from '@angular/core';
import { Context } from '../prismic/context';
import { PrismicService } from '../prismic/prismic.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

import * as PrismicDOM from 'prismic-dom';
import { debugOutputAstAsTypeScript, DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy, AfterViewChecked {
  private routeStream: Subscription;
  PrismicDOM: Object = PrismicDOM;

  ctx ?: Context;
  pageContent ?: any;
  toolbar = false;

  constructor(private prismic: PrismicService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeStream = this.route.params
      .map(params => params['uid'])
      .mergeMap(uid => Observable.fromPromise(this.prismic.buildContext()).map(ctx => [uid, ctx]))
      .subscribe(([uid, ctx]) => {
        this.ctx = ctx;
        this.fetchPage(uid);
      });
  }

  ngOnDestroy() {
    this.routeStream.unsubscribe();
  }

  ngAfterViewChecked() {
    if (this.ctx && !this.toolbar) {
      this.prismic.toolbar(this.ctx.api);
      this.toolbar = true;
    }
  }

  fetchPage(pageUID) {

    this.ctx.api.getByUID('page', pageUID, {})
    .then(data => {
      this.toolbar = false;
      this.pageContent = data;
      console.log(this.pageContent)
    })
    .catch(e => console.log('error in e', e));
  }
}
