import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideLinksComponent } from '../aside-links/aside-links.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, AsideLinksComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavbarComponent, FooterComponent, AsideLinksComponent],
})
export class CoreModule {}
