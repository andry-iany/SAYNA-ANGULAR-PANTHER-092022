import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideLinksComponent } from './aside-links/aside-links.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BodyWrapperComponent } from './body-wrapper/body-wrapper.component';
import { BasketImgComponent } from './basket-img/basket-img.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LoginComponent } from './login/login.component';
import { API_URL } from './constants';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AsideLinksComponent,
    BodyWrapperComponent,
    BasketImgComponent,
    BreadcrumbComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    AsideLinksComponent,
    BodyWrapperComponent,
    BasketImgComponent,
    BreadcrumbComponent,
    LoginComponent,
  ],
  providers: [{ provide: API_URL, useValue: API_URL }],
})
export class CoreModule {}
