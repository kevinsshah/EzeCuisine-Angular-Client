import {Component, OnInit} from '@angular/core';
import {YummlyServiceClient} from '../services/yummly.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private yummlyService: YummlyServiceClient) { }

  searchInput = '';
  results = [];
  currentPage = 1;
  firstPage = 1;
  lastPage = 0;

  search(input, pageNumber) {
    this.currentPage = pageNumber;
    const query = input.replace(' ', '+');
    this.yummlyService
      .findAllResults(query, pageNumber)
      .then(results => {
        this.lastPage = Math.ceil(results['totalMatchCount'] / 10);
        this.results = results['matches'];
      });
  }

  ngOnInit() {
  }
}
