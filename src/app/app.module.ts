import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroesModule } from './heroes/heroes.module';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { MissingPageComponent } from './missing-page/missing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    MissingPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
