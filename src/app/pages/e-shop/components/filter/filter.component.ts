import { Component, OnInit } from '@angular/core';

type FilterOption = {
  description: string;
  count: number;
};

type Filter = {
  title: string;
  options: FilterOption[];
};

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filters: Filter[] = [
    {
      title: 'catégorie',
      options: [
        {
          description: 'Bestsellers',
          count: 123,
        },
        {
          description: 'Goodies',
          count: 123,
        },
        {
          description: 'Vêtements',
          count: 123,
        },
        {
          description: 'Affiches/posters',
          count: 123,
        },
        {
          description: 'Equipement',
          count: 123,
        },
      ],
    },
    {
      title: 'Couleur',
      options: [
        {
          description: 'Noir',
          count: 123,
        },
        {
          description: 'Blanc',
          count: 123,
        },
      ],
    },
    {
      title: 'Univers',
      options: [
        {
          description: 'Black panthers',
          count: 123,
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
