import { Injectable } from '@angular/core';

import { BehaviorSubject, map } from 'rxjs';
import { BasketItem } from '../e-shop.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cartItems$ = new BehaviorSubject<BasketItem[]>([]);

  updateItemCount(id: BasketItem['article']['id'], newCount: number) {
    const changeItemCount = (items: BasketItem[]) => {
      return items.map((item) => {
        return String(id) === String(item.article.id)
          ? { ...item, articleCount: newCount }
          : item;
      });
    };

    this._publishChange(changeItemCount);
  }

  deleteItem(id: BasketItem['article']['id']) {
    const deleteItem = (items: BasketItem[]) => {
      return items.filter((item) => String(id) !== String(item.article.id));
    };

    this._publishChange(deleteItem);
  }

  addItem(article: BasketItem['article']) {
    const addItem = (items: BasketItem[]) => {
      const newItem = { article, articleCount: 1 };
      const newItems = items.slice(); // we create a copy of the array to preserve immutability

      const isItemExisting = !!newItems.find((item) => {
        return String(newItem.article.id) === String(item.article.id);
      });

      if (!isItemExisting) newItems.push(newItem);

      return newItems;
    };

    this._publishChange(addItem);
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
