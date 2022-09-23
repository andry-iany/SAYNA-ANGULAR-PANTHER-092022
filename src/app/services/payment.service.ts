import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartService } from './cart.service';

// temporary promo codes that can be applied to the order
const PromoToValueMap: { [k: string]: number } = {
  SAYNA_PROMO: 5,
};

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  readonly PromoCodes = Object.keys(PromoToValueMap);

  appliedPromo$ = new BehaviorSubject(0);

  constructor(public cartService: CartService) {}

  applyPromo(code: string) {
    // we apply promo only once per order
    if (!this.appliedPromo$.value && this.isValidPromo(code)) {
      const value = PromoToValueMap[code];
      this.appliedPromo$.next(value);
      return true;
    }
    return false;
  }

  isValidPromo(code: string) {
    return this.PromoCodes.includes(code);
  }

  getTotalPrice() {
    return this.getPriceSubtotal().pipe(
      map((subtotal) => subtotal + this.appliedPromo$.value)
    );
  }

  getPriceSubtotal() {
    return this.cartService.cartItems$.pipe(
      map((items) =>
        items.reduce((acc, item) => {
          return acc + item.article.price * item.articleCount;
        }, 0)
      )
    );
  }
}
