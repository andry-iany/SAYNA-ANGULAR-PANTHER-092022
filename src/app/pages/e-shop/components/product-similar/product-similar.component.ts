import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-similar',
  templateUrl: './product-similar.component.html',
  styleUrls: ['./product-similar.component.scss'],
})
export class ProductSimilarComponent implements OnInit {
  constructor(private productService: ProductService) {}
  recommendations$ = this.productService.getAllArticles({ _limit: 3 });

  ngOnInit(): void {}
}
