import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartService } from './cart.service';

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
    return this.cartService
      .getSubtotal()
      .pipe(map((subtotal) => subtotal + this.appliedPromo$.value));
  }
}
