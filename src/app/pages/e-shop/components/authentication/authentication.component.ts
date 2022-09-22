import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
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
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLoginSuccess() {
    this.router.navigateByUrl('/e-shop/shipping');
  }
}
