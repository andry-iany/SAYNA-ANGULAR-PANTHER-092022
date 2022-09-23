import { Component, Input, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss'],
})
export class ProductImageComponent implements OnInit {
  @Input() srcSet: string[] = [];

  constructor(public api: API_URL) {}

  ngOnInit(): void {}
}
