import { Component, Input, OnInit } from '@angular/core';
import { TArticle } from '../e-shop.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: TArticle;

  constructor() {}

  ngOnInit(): void {}
}
