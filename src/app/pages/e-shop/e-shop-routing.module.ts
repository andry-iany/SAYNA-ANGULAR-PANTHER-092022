import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { EShopComponent } from './e-shop.component';

const routes: Routes = [
  {
    path: 'e-shop',
    component: EShopComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AllProductsComponent,
      },
      {
        path: 'product/:productId',
        component: ProductDetailComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'order',
        component: OrderSummaryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EShopRoutingModule {}
