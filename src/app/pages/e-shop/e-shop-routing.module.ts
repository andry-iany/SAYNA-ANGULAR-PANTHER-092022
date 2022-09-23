import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { EShopComponent } from './e-shop.component';

const routes: Routes = [
  {
    path: 'e-shop',
    component: EShopComponent,
    title: 'E-Shop | Black Panther',
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
      {
        path: 'shipping',
        component: ShippingComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'order-confirmation',
        component: ConfirmationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EShopRoutingModule {}
