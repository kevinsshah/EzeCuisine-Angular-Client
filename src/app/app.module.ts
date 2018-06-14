import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import {YummlyServiceClient} from './services/yummly.service.client';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import {RecipeServiceClient} from './services/recipe.service.client';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    SearchBarComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    CarouselModule,
    WavesModule
  ],
  providers: [
    YummlyServiceClient,
    RecipeServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
