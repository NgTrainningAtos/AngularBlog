import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.css']
})
export class HomeFilterComponent implements OnInit {
  filterMenus: any;
  constructor() {
    this.filterMenus = [
      {
        name: 'Today',
        url: 'today'
      },
      {
        name: 'Yesterday',
        url: 'yesterday'
      },
      {
        name: 'This week',
        url: 'thisweek'
      }
    ];
  }

  ngOnInit() {}
}
