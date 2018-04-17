import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // required for ngIf templating property
import { PrismicService } from '../prismic/prismic.service';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule],
  exports: [LandingPageComponent],
  providers: [PrismicService]
})
export class LandingPageModule {}
