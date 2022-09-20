import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TArticle } from '../e-shop.model';

const api = 'http://localhost:5678/articles/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllArticles() {
    return this.http.get<TArticle[]>(api);
  }

  getArticleById(id: TArticle['id']) {
    return this.http.get<TArticle>(api + id);
  }
}
