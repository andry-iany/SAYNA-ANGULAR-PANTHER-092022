import { Component, Input, OnInit } from '@angular/core';
import { TArticle } from '../e-shop.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: TArticle;
  @Input() isSale = false;

  constructor() {}

  ngOnInit(): void {}
}
