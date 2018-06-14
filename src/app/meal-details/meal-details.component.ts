import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {YummlyServiceClient} from '../services/yummly.service.client';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private yummlyService: YummlyServiceClient) {
    this.route.params.subscribe(params => this.setMealId(params));
  }

  mealDetails = {};
  mealId = '';

  setMealId(params) {
    this.mealId = params['mealId'];
    this.findMealById(this.mealId);
  }

  findMealById(mealId) {
    this.yummlyService
      .findMealById(mealId)
      .then(result => this.mealDetails = result);
  }

  ngOnInit() {
  }
}
