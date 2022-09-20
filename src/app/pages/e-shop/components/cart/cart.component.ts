import { Component, OnInit } from '@angular/core';
import { BasketItem } from '../../e-shop.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  basketItems: BasketItem[] = [
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

  onItemCountChange(id: BasketItem['article']['id'], newCount: number) {
    this.basketItems = this.basketItems.map((item) => {
      return String(id) === String(item.article.id)
        ? { ...item, articleCount: newCount }
        : item;
    });
  }

  onItemDelete(id: BasketItem['article']['id']) {
    this.basketItems = this.basketItems.filter(
      (item) => String(id) !== String(item.article.id)
    );
  }

  ngOnInit(): void {}

  get subTotal() {
    return this.basketItems.reduce((acc, item) => acc + item.article.price, 0);
  }
}
