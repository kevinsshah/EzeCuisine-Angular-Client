import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search/:searchText', component: SearchComponent},
  { path: 'search/:searchText/:yummlyId', component: RecipeDetailsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', component: HomeComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
