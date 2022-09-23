import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TArticle } from '../pages/e-shop/e-shop.model';
import { filter, map } from 'rxjs';
import { API_URL } from 'src/app/shared/constants';

type Pagination = {
  _limit: number;
  _page?: number;
};

type QueryOptions = {
  pagination?: Pagination;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api = '';
  constructor(private http: HttpClient, private rootApi: API_URL) {
    this.api = this.rootApi + 'articles';
  }

  getAllArticles(options?: QueryOptions) {
    let endpoint = this.api;

    if (options?.pagination) {
      const query = this._buildQueryFrom(options.pagination);
      endpoint += `?${query}`;
    }

    return this.http.get<TArticle[]>(endpoint);
  }

  getArticleById(id: TArticle['id']) {
    return this.getArticleByIds([id]).pipe(
      map((res) => res[0]),
      filter((res) => !!res)
    );
  }

  getArticleByIds(ids: TArticle['id'][], options?: QueryOptions) {
    const queries = [...ids.map((id) => ({ id })), options?.pagination ?? {}];
    const query = this._buildQueryFrom(...queries);
    return this.http.get<TArticle[]>(`${this.api}?${query}`);
  }

  private _buildQueryFrom(...objects: { [key: string]: string | number }[]) {
    return objects
      .flatMap((obj) => {
        return Object.entries(obj).map(([key, value]) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        });
      })
      .join('&');
  }
}
