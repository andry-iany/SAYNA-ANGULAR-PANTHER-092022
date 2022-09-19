import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // - needed to keep track of the current active route
  // - we need to let the components at paths "/", "/wakanda" and "enigmas" to reload
  // in order to load JQuery, otherwise the animations won't work
  currentLegacyActive: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((value) => {
      this.currentLegacyActive = value[0]?.path || '';
    });
  }
}
