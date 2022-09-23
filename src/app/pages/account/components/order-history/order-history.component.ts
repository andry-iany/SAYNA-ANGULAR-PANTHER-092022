import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { API_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  constructor(private orderService: OrderService, public api: API_URL) {}
  orders$ = this.orderService.getOrderHistory();

  ngOnInit(): void {}
}
