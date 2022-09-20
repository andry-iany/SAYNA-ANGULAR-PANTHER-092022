import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideLinksComponent } from './aside-links/aside-links.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BodyWrapperComponent } from './body-wrapper/body-wrapper.component';
import { BasketImgComponent } from './basket-img/basket-img.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AsideLinksComponent,
    BodyWrapperComponent,
    BasketImgComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    AsideLinksComponent,
    BodyWrapperComponent,
    BasketImgComponent,
  ],
})
export class CoreModule {}
