import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {YummlyServiceClient} from '../services/yummly.service.client';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private yummlyService: YummlyServiceClient) {
    this.route.params.subscribe(params => this.setRecipeId(params));
  }

  recipeDetails = {};
  recipeId = '';

  setRecipeId(params) {
    this.recipeId = params['recipeId'];
    this.findRecipeById(this.recipeId);
  }

  findRecipeById(recipeId) {
    this.yummlyService
      .findRecipeById(recipeId)
      .then(result => this.recipeDetails = result);
  }

  ngOnInit() {
  }
}
