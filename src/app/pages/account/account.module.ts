import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent, AccountDetailComponent],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
