import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { CoreModule } from 'src/app/shared/core.module';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

@NgModule({
  declarations: [AccountComponent, AccountInfoComponent, OrderHistoryComponent],
  imports: [CommonModule, AccountRoutingModule, CoreModule],
})
export class AccountModule {}
