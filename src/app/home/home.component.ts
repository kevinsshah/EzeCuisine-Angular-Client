import { Component, OnInit } from '@angular/core';
import {YummlyServiceClient} from '../services/yummly.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private yummlyService: YummlyServiceClient,
              private router: Router) {
    this.getStartRecipes();
  }

  dishes = [];
  slides = [
    {
      imageSrc: 'http://www.hhdenver.com/data1/images/fullhdwallpaperfood65.jpg',
      mainHeading: 'OUR RECIPES',
      subHeading: 'Tried, tested, tasted and reviewed by the best of critics and our thousands of customers and chefs'
    },
    {
      imageSrc: 'https://dmkz2i5qfmsty.cloudfront.net/aa7c2b48-6a24-4cf1-81de-682a0ed78ed3.jpg',
      mainHeading: 'OUR SERVICE',
      subHeading: 'The best on east coast, and it\'s absolutely free throughout your lifetime!'
    },
    {
      imageSrc: 'http://www.gettwistedmeals.com/photos/IMG-0569.jpg?autorotate=true&mode=crop&scale=both&quality=50&width=1600&height=700',
      mainHeading: 'OUR VARIETY',
      subHeading: 'We bring to you thousands of recipes with a plethora of eze cuisines'
    }
  ];

  getStartRecipes() {
    this.yummlyService.getStartRecipes()
      .then(response => {
        this.dishes = response['matches'];
      });
  }

  navigate(yummlyId, recipeName) {
    this.router.navigate(['search/' + recipeName + '/' + yummlyId]);
  }

  ngOnInit() {
  }

}
