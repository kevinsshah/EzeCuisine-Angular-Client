import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search/:searchText', component: SearchComponent},
  { path: 'search/:searchText/:recipeId', component: RecipeDetailsComponent},
  { path: '**', component: HomeComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
