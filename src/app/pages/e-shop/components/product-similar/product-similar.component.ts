import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TArticle } from '../../e-shop.model';
import { ProductService } from '../../services/product.service';

type Maybe<T> = T | null;

@Component({
  selector: 'app-product-similar',
  templateUrl: './product-similar.component.html',
  styleUrls: ['./product-similar.component.scss'],
})
export class ProductSimilarComponent implements OnInit {
  @Input() article: Maybe<TArticle> = null;

  constructor(private productService: ProductService) {}

  recommendations$ = this.productService.getAllArticles().pipe(
    map((articles) => {
      return articles
        .filter((article) =>
          this.areArticlesSameCategory(article, this.article)
        )
        .slice(0, 3);
    })
  );

  ngOnInit(): void {}

  private areArticlesSameCategory(art1: TArticle, art2: Maybe<TArticle>) {
    return (
      art1.category.trim() === art2?.category.trim() && art1.id !== art2.id
    );
  }
}
