import {Component, OnInit} from '@angular/core';
import {YummlyServiceClient} from '../services/yummly.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private yummlyService: YummlyServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => this.setSearchText(params));
    this.searchMeals(this.searchText, 1);
  }

  searchText = '';
  results = [];
  currentPage = 1;
  firstPage = 1;
  lastPage = 0;

  setSearchText(params) {
    this.searchText = params['searchText'];
    this.searchMeals(this.searchText, 1);
  }

  searchMeals(input, pageNumber) {
    this.currentPage = pageNumber;
    const query = input.replace('%20', '+');
    this.yummlyService
      .findAllMeals(query, pageNumber)
      .then(results => {
        this.lastPage = Math.ceil(results['totalMatchCount'] / 10);
        this.results = results['matches'];
      });
  }

  navigate(mealId) {
    this.router.navigate(['search/' + this.searchText + '/' + mealId]);
  }

  ngOnInit() {
  }
}
