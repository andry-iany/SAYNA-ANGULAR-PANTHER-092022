import { Component, Input, OnInit } from '@angular/core';

type Link = {
  href: string;
  title: string;
};

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() links: Link[] = [];

  constructor() {}

  ngOnInit(): void {}
}
