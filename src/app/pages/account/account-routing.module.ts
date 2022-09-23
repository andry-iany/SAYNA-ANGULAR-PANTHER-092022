import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AccountComponent } from './account.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    title: 'Compte | Black Panther',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AccountInfoComponent,
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
