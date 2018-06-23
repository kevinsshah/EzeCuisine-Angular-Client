import {Component, OnInit} from '@angular/core';
import {YummlyServiceClient} from '../services/yummly.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../models/recipe.model.client';
import {RecipeServiceClient} from '../services/recipe.service.client';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private yummlyService: YummlyServiceClient,
              private route: ActivatedRoute,
              private recipeService: RecipeServiceClient,
              private router: Router) {
    this.route.params.subscribe(params => this.setSearchText(params));
    this.searchRecipes(this.searchText, 1);
  }

  searchText = '';
  yummlyResults = [];
  ezeCuisineResults: Recipe[] = [];
  currentPage = 1;
  firstPage = 1;
  lastPage = 0;

  setSearchText(params) {
    this.searchText = params['searchText'];
    this.searchRecipes(this.searchText, 1);
  }

  mergeResults() {
    const n2 = this.yummlyResults.length;
    const n1 = this.ezeCuisineResults.length;
    let i = 0, j = 0, z = 0;
    const results = [];
    while (i < n1 && j < n2) {
      results.push(this.ezeCuisineResults[i]);
      i += 1;
      z = 0;
      while (z < 5 && j < n2) {
        results.push(this.yummlyResults);
        j += 1;
        z += 1;
      }
    }
  }

  searchRecipes(input, pageNumber) {
    this.currentPage = pageNumber;
    const query = input.replace('%20', '+');
    this.yummlyService
      .findAllRecipes(query, pageNumber)
      .then(results => {
        this.lastPage = Math.ceil(results['totalMatchCount'] / 10);
        this.yummlyResults = results['matches'];
        return this.recipeService
          .findRecipesBySearchQuery(query);
      })
      .then(recipes => {
        this.ezeCuisineResults = recipes;
        // this.mergeResults();
      });
  }

  navigate(yummlyId) {
    this.router.navigate(['search/' + this.searchText + '/' + yummlyId]);
  }

  navigateEze(ezeId) {
    this.router.navigate(['search/' + this.searchText + '/eze-cuisine-' + ezeId]);
  }

  ngOnInit() {
  }
}
