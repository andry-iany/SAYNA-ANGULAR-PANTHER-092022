import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss'],
})
export class ProductRatingComponent implements OnInit {
  @Input() rating = 0;
  ratingImgs: Array<string> = [];

  constructor() {}

  ngOnInit(): void {
    let imgEmpty = 'icone_3.png';
    let imgFill = 'icone_2.png';
    for (let i = 0; i < 5; i++) {
      this.ratingImgs.push(i < this.rating ? imgFill : imgEmpty);
    }
  }
}
