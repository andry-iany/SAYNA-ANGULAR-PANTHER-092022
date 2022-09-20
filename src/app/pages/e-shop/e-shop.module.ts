import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EShopRoutingModule } from './e-shop-routing.module';
import { EShopComponent } from './e-shop.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { ResultsComponent } from './components/results/results.component';
import { CoreModule } from 'src/app/shared/core.module';

@NgModule({
  declarations: [
    EShopComponent,
    ArticleComponent,
    ArticleCardComponent,
    FilterComponent,
    ResultsComponent,
  ],
  imports: [CommonModule, EShopRoutingModule, CoreModule],
  exports: [EShopComponent],
})
export class EShopModule {}
