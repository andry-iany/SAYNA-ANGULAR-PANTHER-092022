import { Injectable } from '@angular/core';

import { BehaviorSubject, map } from 'rxjs';
import { BasketItem } from '../e-shop.model';

const basketItems: BasketItem[] = [
  {
    article: {
      id: 1,
      price: 49.0,
      src: '../../../assets/illustrations/game/Batgame_14.png',
      title: 'Figurine du Joker',
    },
    articleCount: 1,
  },
  {
    article: {
      id: 2,
      price: 49.0,
      src: '../../../assets/illustrations/game/Batgame_14.png',
      title: 'Figurine du Joker',
    },
    articleCount: 1,
  },
];

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cartItems$ = new BehaviorSubject<BasketItem[]>(basketItems);

  onItemCountChange(id: BasketItem['article']['id'], newCount: number) {
    const changeItemCount = (items: BasketItem[]) => {
      return items.map((item) => {
        return String(id) === String(item.article.id)
          ? { ...item, articleCount: newCount }
          : item;
      });
    };

    this._publishChange(changeItemCount);
  }

  onItemDelete(id: BasketItem['article']['id']) {
    const deleteItem = (items: BasketItem[]) => {
      return items.filter((item) => String(id) !== String(item.article.id));
    };

    this._publishChange(deleteItem);
  }

  getSubtotal() {
    return this.cartItems$.pipe(
      map((items) =>
        items.reduce((acc, item) => {
          return acc + item.article.price * item.articleCount;
        }, 0)
      )
    );
  }

  private _publishChange(fn: (items: BasketItem[]) => BasketItem[]) {
    const newItems = fn(this.cartItems$.value);
    this.cartItems$.next(newItems);
  }
}
