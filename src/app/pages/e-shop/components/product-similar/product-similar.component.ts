import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Article } from 'src/app/app.model';

type Maybe<T> = T | null;

@Component({
  selector: 'app-product-similar',
  templateUrl: './product-similar.component.html',
  styleUrls: ['./product-similar.component.scss'],
})
export class ProductSimilarComponent implements OnInit {
  @Input() article: Maybe<Article> = null;

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

  private areArticlesSameCategory(art1: Article, art2: Maybe<Article>) {
    return (
      art1.category.trim() === art2?.category.trim() && art1.id !== art2.id
    );
  }
}
