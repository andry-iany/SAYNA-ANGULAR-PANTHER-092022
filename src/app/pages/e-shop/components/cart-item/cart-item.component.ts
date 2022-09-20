import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketItem } from '../../e-shop.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  itemCount = 0;
  @Input() item!: BasketItem;

  @Output() onCountChange = new EventEmitter<number>();
  @Output() onItemDelete = new EventEmitter<null>();

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
