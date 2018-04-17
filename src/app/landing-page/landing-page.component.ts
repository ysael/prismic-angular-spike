import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, SimpleChanges, AfterViewChecked } from '@angular/core';
import { Context } from '../prismic/context';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';


import * as PrismicDOM from 'prismic-dom';
import { debugOutputAstAsTypeScript, DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})

export class LandingPageComponent implements OnInit, AfterViewChecked {
  PrismicDOM: Object = PrismicDOM;

  ctx ?: Context;
  pageContent ?: any;
  toolbar = false;
  data: any;

  constructor(private prismic: PrismicService, private route: ActivatedRoute) {
    this.pageContent = this.route.snapshot.data.message.pageContent;
    this.ctx = this.route.snapshot.data.message.ctx;
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if (this.ctx && !this.toolbar) {
      this.prismic.toolbar(this.ctx.api);
      this.toolbar = true;
    }
  }

}
