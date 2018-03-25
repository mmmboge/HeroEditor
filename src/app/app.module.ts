import { HeroesComponent } from './heroes/heroes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent, HeroesComponent, MessagesComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
