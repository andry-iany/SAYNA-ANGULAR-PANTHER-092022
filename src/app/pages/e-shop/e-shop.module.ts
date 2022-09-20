import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EShopRoutingModule } from './e-shop-routing.module';
import { EShopComponent } from './e-shop.component';
import { ArticleComponent } from './components/article/article.component';
import { FilterComponent } from './components/filter/filter.component';
import { ResultsComponent } from './components/results/results.component';
import { CoreModule } from 'src/app/shared/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './components/all-products/all-products.component';

@NgModule({
  declarations: [
    EShopComponent,
    ArticleComponent,
    FilterComponent,
    ResultsComponent,
    AllProductsComponent,
  ],
  imports: [CommonModule, EShopRoutingModule, CoreModule, HttpClientModule],
  exports: [EShopComponent],
})
export class EShopModule {}
