import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/pages/e-shop/services/cart.service';

@Component({
  selector: 'app-basket-img',
  templateUrl: './basket-img.component.html',
  styleUrls: ['./basket-img.component.scss'],
})
export class BasketImgComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}
