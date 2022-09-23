import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';

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
      title: 'livraison et payment',
      href: '/e-shop/shipping',
    },
  ];
  userDetail$ = this.userService.detail$;

  constructor(
    public userService: UserService,
    public paymentService: PaymentService,
    public orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  placeOrder() {
    this.orderService.placeOrder().subscribe((isSuccess) => {
      if (isSuccess) {
        this.router.navigateByUrl('/e-shop/order-confirmation');
      } else {
        alert("Une erreur s'est produite. Veuiller re-essayer ultérieurement");
      }
    });
  }
}
