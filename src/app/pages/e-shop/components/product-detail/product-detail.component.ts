import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TArticle } from '../../e-shop.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  reviews = [
    {
      reviewer: 'Robert',
      rating: 4,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim elit id turpis scelerisque mollis. Nulla vehicula velit augue, ut maximus est porttitor quis. Morbi finibus, nulla non consectetur convallis, eros mi sollicitudin metus, id sollicitudin nunc ligula eu dui.',
    },
    {
      reviewer: 'John',
      rating: 4,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim elit id turpis scelerisque mollis. Nulla vehicula velit augue, ut maximus est porttitor quis. Morbi finibus, nulla non consectetur convallis, eros mi sollicitudin metus, id sollicitudin nunc ligula eu dui.',
    },
  ];

  article$!: ReturnType<typeof this.productService.getArticleById>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.article$ = this.productService.getArticleById(
        params.get('productId') || ''
      );
    });
  }

  onAddToCart(article: TArticle) {
    const isSuccess = this.cartService.addItem({
      id: article.id,
      price: article.price,
      src: article.src,
      title: article.name,
    });

    const message = isSuccess
      ? 'Article ajouté dans le panier avec succès!'
      : "L'ajout ne peut pas être éffectué. L'article est déjà dans votre panier!";
    alert(message);
  }
}
