import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {RecipeServiceClient} from '../services/recipe.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private recipeService: RecipeServiceClient,
              private router: Router) {
  }

  user = {};
  likedRecipes = [];
  ratedRecipes = [];

  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['login']));
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => this.user = user);
    this.recipeService
      .findLikedRecipesForUser()
      .then(recipes => this.likedRecipes = recipes);
    this.recipeService
      .findRatedRecipesForUser()
      .then(recipes => this.ratedRecipes = recipes);
  }

}
