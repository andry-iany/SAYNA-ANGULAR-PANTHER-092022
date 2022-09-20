import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { articles } from '../e-shop.model';
// import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  // constructor(private productService: ProductService) {}

  // articles$ = this.productService.getAllArticles();
  articles$ = of(articles);

  ngOnInit(): void {}
}
