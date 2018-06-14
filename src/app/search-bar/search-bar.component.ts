import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.searchText = params['searchText']);
  }

  searchText = '';

  ngOnInit() {
  }

  navigate(searchText) {
    this.router.navigate(['search/' + searchText]);
  }

  goHome() {
    this.router.navigate(['home']);
  }

}
