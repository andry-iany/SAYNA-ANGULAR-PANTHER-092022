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
        return id === item.article.id
          ? { ...item, articleCount: newCount }
          : item;
      });
    };

    return this._publishChange(changeItemCount);
  }

  deleteItem(id: BasketItem['article']['id']) {
    const deleteItem = (items: BasketItem[]) => {
      const newItems = items.filter((item) => id !== item.article.id);
      return newItems.length === items.length ? null : newItems;
    };

    return this._publishChange(deleteItem);
  }

  addItem(article: BasketItem['article']) {
    const addItem = (items: BasketItem[]) => {
      const newItem = { article, articleCount: 1 };
      const newItems = items.slice(); // we create a copy of the array to preserve immutability

      const isItemExisting = !!newItems.find((item) => {
        return String(newItem.article.id) === String(item.article.id);
      });

      if (isItemExisting) return null;

      newItems.push(newItem);
      return newItems;
    };

    return this._publishChange(addItem);
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

  // this function returns true if the operation is successful, false otherwise
  private _publishChange(fn: (items: BasketItem[]) => BasketItem[] | null) {
    // the callback function needs to return null to indicate error
    const newItems = fn(this.cartItems$.value);

    if (newItems === null) {
      return false;
    } else {
      this.cartItems$.next(newItems);
      return true;
    }
  }
}
