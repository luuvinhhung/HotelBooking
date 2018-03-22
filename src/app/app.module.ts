import { FilterComponent } from './filter/filter.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule} from './material.module';
import { HotelsComponent } from './main/hotels/hotels.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    FirstpageComponent,
    MainComponent,
    FilterComponent,
    HomesearchComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
