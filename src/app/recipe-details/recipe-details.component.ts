import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {YummlyServiceClient} from '../services/yummly.service.client';
import {RecipeServiceClient} from '../services/recipe.service.client';
import {LikeServiceClient} from '../services/like.service.client';
import {RatingServiceClient} from '../services/rating.service.client';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private yummlyService: YummlyServiceClient,
              private likeService: LikeServiceClient,
              private ratingService: RatingServiceClient,
              private recipeService: RecipeServiceClient,
              private userService: UserServiceClient) {
    this.route.params.subscribe(params => this.setRecipeId(params));
  }

  recipeDetails = {};
  yummlyId = '';
  recipeId = '';
  likedUsers = [];
  ratedUsers = [];
  rating = '';
  currentUser: User = new User();

  like() {
    if (this.currentUser['username']) {
      this
        .likeService
        .like(this.recipeId);
    } else {
      this.router.navigate(['login']);
    }
  }

  rate(rating) {
    if (this.currentUser['username']) {
      this
        .ratingService
        .rate(this.recipeId, rating)
        .then(() => this.loadRatedUsersForRecipe(this.recipeId));
    } else {
      this.router.navigate(['login']);
    }
  }

  setRecipeId(params) {
    this.yummlyId = params['yummlyId'];
    this.findRecipeById(this.yummlyId);

  }

  loadLikedUsersForRecipe(recipeId) {
    this
      .likeService
      .findLikedUsersForRecipe(recipeId)
      .then(users => this.likedUsers = users);
  }

  loadRatedUsersForRecipe(recipeId) {
    this
      .ratingService
      .findRatedUsersForRecipe(recipeId)
      .then(users => this.ratedUsers = users);
  }

  findRecipeById(yummlyId) {
    this.recipeService
      .findRecipeById(yummlyId)
      .then(response => {
        if (response['name']) {
          response['ingredients'] = response['ingredients'].split('\n');
          this.recipeDetails = response;
          this.recipeId = response['_id'];
          this.loadRatedUsersForRecipe(this.recipeId);
        } else {
          this.yummlyService
            .findRecipeById(yummlyId)
            .then(result =>
              this.recipeService
                .createRecipe(result)
            )
            .then(recipe => {
            if (recipe['ingredients']) {
              recipe['ingredients'] = recipe['ingredients'].split('\n');
              this.recipeDetails = recipe;
              this.recipeId = recipe['_id'];
              this.loadRatedUsersForRecipe(this.recipeId);
            }
          });
        }
      });
  }

  ngOnInit() {
    this
      .userService
      .profile()
      .then(response => {
        this.currentUser = response;
      });
  }
}
