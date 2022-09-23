import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { API_URL } from 'src/app/shared/constants';
import { BasketItem } from 'src/app/app.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item!: BasketItem;

  @Output() onCountChange = new EventEmitter<number>();
  @Output() onItemDelete = new EventEmitter<null>();

  constructor(public api: API_URL) {}

  ngOnInit(): void {}

  onIncrementCount() {
    this.onCountChange.emit(this.item.articleCount + 1);
  }

  onDecrementCount() {
    if (this.item.articleCount > 0)
      this.onCountChange.emit(this.item.articleCount - 1);
  }

  onItemDeleted() {
    this.onItemDelete.emit();
  }
}
