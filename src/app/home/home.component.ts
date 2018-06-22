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
      mainHeading: 'Main heading',
      subHeading: 'Sub heading'
    },
    {
      imageSrc: 'https://dmkz2i5qfmsty.cloudfront.net/aa7c2b48-6a24-4cf1-81de-682a0ed78ed3.jpg',
      mainHeading: 'Main heading',
      subHeading: 'Sub heading'
    },
    {
      imageSrc: 'http://www.gettwistedmeals.com/photos/IMG-0569.jpg?autorotate=true&mode=crop&scale=both&quality=50&width=1600&height=700',
      mainHeading: 'Main heading',
      subHeading: 'Sub heading'
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
