import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {RecipeServiceClient} from '../services/recipe.service.client';
import {Recipe} from '../models/recipe.model.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private recipeService: RecipeServiceClient,
              private router: Router) {
  }

  chefs: User[] = [];
  critics: User[] = [];
  customers: User[] = [];
  chefSpecials: Recipe[] = [];
  yummlySpecials: Recipe[] = [];
  selection = 'Manage Users';

  deleteUser(user) {
    event.stopPropagation();
    this.recipeService
      .findCreatedRecipesForUser(user._id)
      .then((recipes) =>
        recipes.map(recipe => this.recipeService.deleteRecipe(recipe._id)))
      .then(() => this.userService.deleteUser(user._id))
      .then(() => {
        this.loadAllUsers();
        this.loadAllRecipes();
      });
  }

  navigateToRecipe(recipe) {
    if (recipe.yummlyId) {
      this.router.navigate(['search/' + recipe.name + '/' + recipe.yummlyId]);
    } else {
      this.router.navigate(['search/' + recipe.name + '/eze-cuisine-' + recipe._id]);
    }
  }

  navigateToProfile(username) {
    this.router.navigate(['profile/' + username]);
  }

  changeSelection(selection) {
    this.selection = selection;
  }

  loadAllUsers() {
    this.userService
      .findAllUsers()
      .then(users => {
        const allUsers = users
          .filter(user => user.role !== 'Admin');
        this.chefs = allUsers
          .filter(user => user.role === 'Chef');
        this.critics = allUsers
          .filter(user => user.role === 'Critic');
        this.customers = allUsers
          .filter(user => user.role === 'Customer');
      });
  }

  loadAllRecipes() {
    this.recipeService
      .findAllRecipes()
      .then(recipes => {
        const allRecipes = recipes;
        this.chefSpecials = allRecipes
          .filter(recipe => recipe['createdBy']);
        this.yummlySpecials = allRecipes
          .filter(recipe => !recipe['createdBy']);
      });
  }

  ngOnInit() {
    this.loadAllUsers();
    this.loadAllRecipes();
  }

}
