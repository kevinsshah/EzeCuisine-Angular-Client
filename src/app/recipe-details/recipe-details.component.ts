import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {YummlyServiceClient} from '../services/yummly.service.client';
import {RecipeServiceClient} from '../services/recipe.service.client';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private yummlyService: YummlyServiceClient,
              private recipeService: RecipeServiceClient) {
    this.route.params.subscribe(params => this.setRecipeId(params));
  }

  recipeDetails = {};
  yummlyId = '';
  recipe = {};

  setRecipeId(params) {
    this.yummlyId = params['yummlyId'];
    this.findRecipeById(this.yummlyId);
  }

  findRecipeById(yummlyId) {
    this.recipeService
      .findRecipeById(yummlyId)
      .then(response => {
        if (response['name']) {
          response['ingredients'] = response['ingredients'].split('\n')
          this.recipeDetails = response;
        } else {
          this.yummlyService
            .findRecipeById(yummlyId)
            .then(result => {
              this.recipeService
                .createRecipe(result)
                .then(recipe => {
                  if (recipe['ingredients']) {
                    recipe['ingredients'] = recipe['ingredients'].split('\n');
                    this.recipeDetails = recipe;
                  }
                });
            });
        }
      });
  }

  ngOnInit() {
  }
}
