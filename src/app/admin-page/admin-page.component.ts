import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {RecipeServiceClient} from '../services/recipe.service.client';
import {Recipe} from '../models/recipe.model.client';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private recipeService: RecipeServiceClient,
              private modalService: NgbModal,
              private router: Router) {
  }

  chefs: User[] = [];
  critics: User[] = [];
  customers: User[] = [];
  chefSpecials: Recipe[] = [];
  yummlySpecials: Recipe[] = [];
  selection = 'Manage Users';
  newRecipe: Recipe = new Recipe();
  newUser: User = new User();
  modalReference: NgbModalRef;
  closeResult: string;

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

  createUser() {
    this.userService
      .createUserByAdmin(this.newUser)
      .then(() => {
        this.loadAllUsers();
        this.modalReference.close();
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

  open(content) {
    this.modalReference = this.modalService.open(content, { size : 'lg'});
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openAddUserModal(content) {
    event.stopPropagation();
    this.newUser = new User();
    this.open(content);
  }

  openEditRecipeModal(content, user) {
    event.stopPropagation();
    this.newUser = user;
    this.open(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
    this.newUser.role = '';
    this.loadAllUsers();
    this.loadAllRecipes();
  }
}
