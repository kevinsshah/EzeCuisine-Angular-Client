import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search/:searchText', component: SearchComponent},
  { path: 'search/:searchText/:recipeId', component: RecipeDetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/:username', component: UserProfileComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: '**', component: HomeComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
