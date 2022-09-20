import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EShopRoutingModule } from './e-shop-routing.module';
import { EShopComponent } from './e-shop.component';

@NgModule({
  declarations: [EShopComponent],
  imports: [CommonModule, EShopRoutingModule],
  exports: [EShopComponent],
})
export class EShopModule {}
