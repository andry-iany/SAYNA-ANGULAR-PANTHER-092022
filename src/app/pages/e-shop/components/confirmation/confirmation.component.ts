import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
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
    {
      title: 'Achat confirmé',
      href: '/e-shop/order-confirmation',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
