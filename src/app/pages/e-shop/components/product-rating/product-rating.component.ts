import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss'],
})
export class ProductRatingComponent implements OnInit {
  @Input('rating') initialRating = 0;
  @Input() editable = false;

  private imgEmpty = 'icone_3.png';
  private imgFill = 'icone_2.png';
  private ratingSubject = new BehaviorSubject(0);

  ratingImgs$ = this.ratingSubject.pipe(
    map((rating) => {
      const ratingImgs = [];
      for (let i = 0; i < 5; i++) {
        ratingImgs.push(i < rating ? this.imgFill : this.imgEmpty);
      }
      return ratingImgs;
    }),
    tap((val) => console.log(val))
  );

  constructor() {}

  ngOnInit(): void {
    this.ratingSubject.next(this.initialRating);
  }

  onRatingClicked(rating: number) {
    if (this.editable) {
      this.ratingSubject.next(rating);
    }
  }
}
