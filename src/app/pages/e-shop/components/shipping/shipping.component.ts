import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {
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
    {
      title: 'authentification',
      href: '/e-shop/auth',
    },
    {
      title: 'livraison et payment',
      href: '/e-shop/shipping',
    },
  ];
  userDetail$ = this.userService.userDetail$;

  constructor(
    public userService: UserService,
    public paymentService: PaymentService
  ) {}

  ngOnInit(): void {}
}
