import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {RecipeServiceClient} from '../services/recipe.service.client';
import {LikeServiceClient} from '../services/like.service.client';
import {RatingServiceClient} from '../services/rating.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private recipeService: RecipeServiceClient,
              private likeService: LikeServiceClient,
              private ratingService: RatingServiceClient,
              private router: Router) {
  }

  user = {};
  likedRecipes = [];
  ratedRecipes = [];
  alertSuccess = false;

  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['login']));
  }

  removeAlert() {
    this.alertSuccess = false;
  }

  update(user) {
    console.log(user);
  }


  ngOnInit() {
    this.userService
      .profile()
      .then(user => this.user = user);
    this.likeService
      .findLikedRecipesForUser()
      .then(recipes => this.likedRecipes = recipes);
    this.ratingService
      .findRatedRecipesForUser()
      .then(recipes => this.ratedRecipes = recipes);
  }
}
