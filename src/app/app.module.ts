import { FirstpageComponent } from './firstpage/firstpage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HotelsComponent } from './home/main/hotel/hotel.component';
import { MainComponent } from './home/main/main.component';
import { HomesearchComponent } from './home/homesearch/homesearch.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './home/filter/filter.component';

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
