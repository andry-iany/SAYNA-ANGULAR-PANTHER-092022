import { Component, Input, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/constants';
import { Article } from 'src/app/app.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;

  constructor(public api: API_URL) {}

  ngOnInit(): void {}
}
