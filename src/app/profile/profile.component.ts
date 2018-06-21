import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {RecipeServiceClient} from '../services/recipe.service.client';
import {LikeServiceClient} from '../services/like.service.client';
import {RatingServiceClient} from '../services/rating.service.client';
import {User} from '../models/user.model.client';
import {Like} from '../models/like.model.client';
import {Rating} from '../models/rating.model.client';
import {Follow} from '../models/follow.model.client';
import {FollowServiceClient} from '../services/follow.service.client';

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
              private followService: FollowServiceClient,
              private router: Router) {
  }

  user: User = new User();
  likedRecipes: Like[] = [];
  ratedRecipes: Rating[] = [];
  followers: Follow[] = [];
  followings: Follow[] = [];
  alertSuccess = false;
  selection = 'Liked Recipes';

  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['login']));
  }

  removeAlert() {
    this.alertSuccess = false;
  }

  changeSelection(selection) {
    this.selection = selection;
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
      .findLikedRecipesForCurrentUser()
      .then(recipes => this.likedRecipes = recipes);
  }

  loadRatedRecipesForUser() {
    this.ratingService
      .findRatedRecipesForCurrentUser()
      .then(recipes => this.ratedRecipes = recipes);
  }


  loadFollowersForUser() {
    this.followService
      .getFollowersForCurrentUser()
      .then(followers => this.followers = followers);
  }

  loadFollowingForUser() {
    this.followService
      .getFollowingForCurrentUser()
      .then(followings => this.followings = followings);
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        if (user['username']) {
          this.user = user;
          this.loadLikedRecipesForUser();
          this.loadRatedRecipesForUser();
          this.loadFollowersForUser();
          this.loadFollowingForUser();
        } else {
          this.router.navigate(['login']);
        }
      });
  }
}
