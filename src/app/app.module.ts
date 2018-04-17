import { HiComponent } from './hi/hi.component';
import { LandingPageResolver } from './landing-page/landing-page.resolver';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { PreviewModule } from './preview/preview.module';
import { HelpModule } from './help/help.module';
import { FormsModule } from '@angular/forms';
import { PrismicService } from './prismic/prismic.service';
import { PreviewComponent } from './preview/preview.component';
import { HelpComponent } from './help/help.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { FormStyle } from '@angular/common';
import { PageModule } from './page/page.module';
import { PageComponent } from './page/page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '', pathMatch: 'full', redirectTo: '/help' },
  { path: 'hi', component: HiComponent, pathMatch: 'full',
  resolve: { message: LandingPageResolver } },
  { path: 'help', component: HelpComponent},
  { path: 'preview', component: PreviewComponent },
  { path: 'page/:uid', component: PageComponent },
  {
    path: 'landingpage',
    component: LandingPageComponent,
    pathMatch: 'full',
    resolve: { message: LandingPageResolver }
  },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HiComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    CookieModule.forRoot(),
    HelpModule,
    PreviewModule,
    PageModule,
    LandingPageModule,
    FormsModule,
    HttpModule,
    TransferHttpCacheModule,
  ],
  providers: [PrismicService, LandingPageResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
