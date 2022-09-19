import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopComponent } from './pages/e-shop/e-shop.component';
import { EnigmasComponent } from './pages/enigmas/enigmas.component';
import { HomeComponent } from './pages/home/home.component';
import { WakandaComponent } from './pages/wakanda/wakanda.component';

const routes: Routes = [
  {
    path: 'wakanda',
    component: WakandaComponent,
  },
  {
    path: 'enigmas',
    component: EnigmasComponent,
  },

  {
    path: 'e-shop',
    component: EShopComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
