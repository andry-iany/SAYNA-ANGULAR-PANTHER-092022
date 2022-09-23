import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { CoreModule } from 'src/app/shared/core.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, AccountRoutingModule, CoreModule],
})
export class AccountModule {}
