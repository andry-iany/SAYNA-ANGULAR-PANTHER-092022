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
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRatingComponent } from './components/product-rating/product-rating.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductSimilarComponent } from './components/product-similar/product-similar.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    EShopComponent,
    ArticleComponent,
    FilterComponent,
    ResultsComponent,
    AllProductsComponent,
    ProductDetailComponent,
    ProductRatingComponent,
    ProductImageComponent,
    ProductSimilarComponent,
    CartComponent,
    CartItemComponent,
    OrderSummaryComponent,
    AuthenticationComponent,
    ShippingComponent,
    ConfirmationComponent,
  ],
  imports: [CommonModule, EShopRoutingModule, CoreModule, HttpClientModule],
  exports: [EShopComponent],
})
export class EShopModule {}
