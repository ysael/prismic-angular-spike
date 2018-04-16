import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // required for ngIf templating property
import { PrismicService } from '../prismic/prismic.service';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule],
  exports: [PageComponent],
  providers: [PrismicService]
})
export class PageModule {}
