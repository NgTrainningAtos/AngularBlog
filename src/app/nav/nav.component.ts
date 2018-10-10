import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  homeMenus: any;
  constructor() {
    this.homeMenus = [
      {
        name: 'Accueil',
        url: 'home'
      },
      {
        name: 'Articles',
        url: 'article'
      },
      {
        name: 'A Propos',
        url: 'about'
      }
    ];
  }

  ngOnInit() {}
}
