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
  recipes: Recipe[] = [];
  selection = 'Manage Users';

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
        this.recipes = recipes});
  }

  navigateToProfile(username) {
    this.router.navigate(['profile/' + username]);
  }

  changeSelection(selection) {
    this.selection = selection;
  }

  ngOnInit() {
    this.loadAllUsers();
    this.loadAllRecipes();
  }

}
