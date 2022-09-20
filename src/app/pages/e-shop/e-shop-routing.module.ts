import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopComponent } from './e-shop.component';

const routes: Routes = [
  {
    path: 'e-shop',
    component: EShopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EShopRoutingModule {}
