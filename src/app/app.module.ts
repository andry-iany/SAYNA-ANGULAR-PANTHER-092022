import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { HomeComponent } from './pages/home/home.component';
import { WakandaComponent } from './pages/wakanda/wakanda.component';
import { EnigmasComponent } from './pages/enigmas/enigmas.component';
import { EShopModule } from './pages/e-shop/e-shop.module';
import { CoreModule } from './shared/core.module';
import { AccountModule } from './pages/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WakandaComponent,
    EnigmasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EShopModule,
    CoreModule,
    AccountModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
