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
          description: 'Comics',
          count: 123,
        },
        {
          description: 'Multimedia',
          count: 123,
        },
        {
          description: 'Equipement',
          count: 123,
        },
        {
          description: 'Bijoux',
          count: 123,
        },
        {
          description: 'Vehicule',
          count: 123,
        },
      ],
    },
    {
      title: 'Couleur',
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
      ],
    },
    {
      title: 'Univers',
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
          description: 'Comics',
          count: 123,
        },
        {
          description: 'Multimedia',
          count: 123,
        },
        {
          description: 'Equipement',
          count: 123,
        },
        {
          description: 'Bijoux',
          count: 123,
        },
        {
          description: 'Vehicule',
          count: 123,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
