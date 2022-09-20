import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
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
    path: 'account',
    component: AccountComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
