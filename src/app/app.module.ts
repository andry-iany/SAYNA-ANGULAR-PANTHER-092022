import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { HomeComponent } from './pages/home/home.component';
import { WakandaComponent } from './pages/wakanda/wakanda.component';
import { EnigmasComponent } from './pages/enigmas/enigmas.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, WakandaComponent, EnigmasComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
