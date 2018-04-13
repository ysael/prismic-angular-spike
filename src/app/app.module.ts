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

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '', pathMatch: 'full', redirectTo: '/help' },
  { path: 'help', component: HelpComponent},
  { path: 'preview', component: PreviewComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    CookieModule.forRoot(),
    HelpModule,
    PreviewModule,
    FormsModule,
    HttpModule,
    TransferHttpCacheModule,
  ],
  providers: [PrismicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
