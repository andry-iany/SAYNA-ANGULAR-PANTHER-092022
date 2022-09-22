import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  breadcrumbs = [
    {
      title: 'e-shop',
      href: '/e-shop',
    },
    {
      title: 'panier',
      href: '/e-shop/cart',
    },
    {
      title: 'récapitulatif de la commande',
      href: '/e-shop/order',
    },
  ];

  cartItems$ = this.cartService.cartItems$.pipe(
    map((items) => items.filter((item) => item.articleCount))
  );

  constructor(
    public cartService: CartService,
    public paymentService: PaymentService
  ) {}

  onAddPromo(input: HTMLInputElement) {
    const promoCode = input.value;
    const isSuccess = this.paymentService.applyPromo(promoCode);
    const message = isSuccess
      ? 'Promo ajoutée avec succès!'
      : 'Promo invalide!';
    alert(message);
    input.value = '';
  }

  ngOnInit(): void {}
}
