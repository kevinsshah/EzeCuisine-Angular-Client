import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';
import {YummlyServiceClient} from './services/yummly.service.client';
import {HomeComponent} from './home/home.component';
import {routing} from './app.routing';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeServiceClient} from './services/recipe.service.client';
import {CarouselModule, WavesModule} from 'angular-bootstrap-md';
import {RegisterComponent} from './register/register.component';
import {UserServiceClient} from './services/user.service.client';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {LikeServiceClient} from './services/like.service.client';
import {RatingServiceClient} from './services/rating.service.client';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {FollowServiceClient} from './services/follow.service.client';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    SearchBarComponent,
    RecipeDetailsComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    AdminPageComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    CarouselModule,
    WavesModule,
    NgbModule.forRoot()
  ],
  providers: [
    YummlyServiceClient,
    RecipeServiceClient,
    UserServiceClient,
    LikeServiceClient,
    RatingServiceClient,
    FollowServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
