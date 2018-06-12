import { Component, OnInit } from '@angular/core';
import {YummlyServiceClient} from '../services/yummly.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private yummlyService: YummlyServiceClient) { }

  searchInput = '';
  results = [];

  search(input) {
    const query = input.replace(' ', '+');
    this.yummlyService
      .findAllResults(query)
      .then(results => this.results = results['matches']);
  }

  ngOnInit() {
  }
}
