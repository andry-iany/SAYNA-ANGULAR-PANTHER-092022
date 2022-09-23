import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountComponent } from './account.component';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';
import { CoreModule } from 'src/app/shared/core.module';

@NgModule({
  declarations: [
    AccountComponent,
    AccountDetailComponent,
    LoginWrapperComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, CoreModule],
})
export class AccountModule {}
