import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import {YummlyServiceClient} from './services/yummly.service.client';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    YummlyServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
