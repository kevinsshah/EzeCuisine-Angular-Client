import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Like} from '../models/like.model.client';
import {Rating} from '../models/rating.model.client';
import {LikeServiceClient} from '../services/like.service.client';
import {RatingServiceClient} from '../services/rating.service.client';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private userService: UserServiceClient,
              private likeService: LikeServiceClient,
              private ratingService: RatingServiceClient) {
    this.route.params.subscribe(params =>  this.loadUser(params['username']));
  }

  currentUser: User = new User();
  user: User = new User();
  likedRecipes: Like[] = [];
  ratedRecipes: Rating[] = [];

  loadUser(username) {
    this
      .userService
      .profileOfUser(username)
      .then(user => {
        this.user = user;
        this.loadLikedRecipesForUser();
        this.loadRatedRecipesForUser();
      });
  }

  loadLikedRecipesForUser() {
    this.likeService
      .findLikedRecipesForUser(this.user._id)
      .then(recipes => this.likedRecipes = recipes);
  }

  loadRatedRecipesForUser() {
    this.ratingService
      .findRatedRecipesForUser(this.user._id)
      .then(recipes => this.ratedRecipes = recipes);
  }

  ngOnInit() {
    this
      .userService
      .profile()
      .then(user => {
        this.currentUser = user;
      });
  }
}
