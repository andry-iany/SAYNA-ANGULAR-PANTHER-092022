import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private cartService: CartService) {}

  placeOrder() {
    const idsOfItemsToOrder = this.cartService.cartItems$.value
      .filter((item) => item.articleCount > 0) // we'll only place orders for items whose count is greater than 0
      .map((item) => item.article.id);

    // ... http calls ...

    return this.cartService.deleteItems(idsOfItemsToOrder);
  }
}
