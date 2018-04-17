import { PrismicService } from './../prismic/prismic.service';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Context } from '../prismic/context';
import { connectableObservableDescriptor } from 'rxjs/observable/ConnectableObservable';

@Injectable()
export class LandingPageResolver implements Resolve<Observable<any>> {
  constructor(private prismic: PrismicService) {}
  ctx ?: Context;

  resolve() {
    return Observable.fromPromise(this.prismic.buildContext())
        .flatMap((ctx: Context) => {
            this.ctx = ctx;
            return this.ctx.api.getByUID('landing_page', 'music-collaboration', {});
        })
        .map(res => {
            console.log(res);
            return Object.assign({}, {pageContent: res}, {ctx: this.ctx});
        });
  }

}
