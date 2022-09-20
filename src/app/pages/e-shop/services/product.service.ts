import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TArticle } from '../e-shop.model';

const api = 'http://localhost:5678/articles/';

type Pagination = {
  _limit: number;
  _page?: number;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllArticles(pagination?: Pagination) {
    let endpoint = api;
    if (pagination) {
      const query = Object.entries(pagination)
        .map(([key, value]) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
        .join('&');
      endpoint += `?${query}`;
    }

    return this.http.get<TArticle[]>(endpoint);
  }

  getArticleById(id: TArticle['id']) {
    return this.http.get<TArticle>(api + id);
  }
}
