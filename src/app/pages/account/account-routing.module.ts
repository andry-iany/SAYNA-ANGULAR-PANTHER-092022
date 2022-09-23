import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    title: 'Compte | Black Panther',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AccountDetailComponent,
      },
      {
        path: 'detail',
        component: AccountDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
