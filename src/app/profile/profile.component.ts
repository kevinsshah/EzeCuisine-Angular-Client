import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {RecipeServiceClient} from '../services/recipe.service.client';
import {LikeServiceClient} from '../services/like.service.client';
import {RatingServiceClient} from '../services/rating.service.client';
import {User} from '../models/user.model.client';

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

  user: User = new User();
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
    this.userService
      .update(user)
      .then(() => {
        this.alertSuccess = true;
      });
  }

  loadLikedRecipesForUser() {
    this.likeService
      .findLikedRecipesForUser()
      .then(recipes => this.likedRecipes = recipes);
  }

  loadRatedRecipesForUser() {
    this.ratingService
      .findRatedRecipesForUser()
      .then(recipes => this.ratedRecipes = recipes);
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        if (user['username']) {
          this.user = user;
          this.loadLikedRecipesForUser();
          this.loadRatedRecipesForUser();
        } else {
          this.router.navigate(['login']);
        }
      });
  }
}
