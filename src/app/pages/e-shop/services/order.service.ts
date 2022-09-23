import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { API_URL } from 'src/app/shared/constants';
import { AuthService } from '../../account/services/auth.service';
import { Order } from '../e-shop.model';
import { CartService } from './cart.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private http: HttpClient,
    private rootApi: API_URL,
    private productService: ProductService
  ) {}

  placeOrder() {
    const articles = this.cartService.cartItems$.value
      .filter((item) => item.articleCount > 0) // we'll only place orders for items whose count is greater than 0
      .map((item) => ({ id: item.article.id, quantity: item.articleCount }));

    const user = this.authService.getUserLoggedIn();
    if (!user) return of(false);

    const endpoint = this.rootApi + 'orders';
    const body = { articles, user, createdAt: new Date().toISOString() };

    return this.http.post(endpoint, body).pipe(
      map((arg) => !!arg),
      tap((_) => {
        this.cartService.deleteItems(articles.map((art) => art.id));
      }),
      catchError((_) => of(false))
    );
  }

  getOrderHistory() {
    const user = this.authService.getUserLoggedIn() || '';
    const endpoint = this.rootApi + 'orders/?user=' + encodeURIComponent(user);
    return this.http.get<Order[]>(endpoint).pipe(
      map((orders) =>
        orders.map((order) => {
          const articleIds = order.articles.map((article) => article.id);
          const articles$ = this.productService.getArticleByIds(articleIds);
          return { ...order, articles: articles$ };
        })
      ),
      tap((data) => console.log({ data }))
    );
  }
}
