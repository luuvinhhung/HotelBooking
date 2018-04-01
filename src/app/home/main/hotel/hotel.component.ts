import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelsComponent implements OnInit {
  hotelPoster: String = 'assets/category1.png';
  overviewtext: String = '';
  constructor() {
    this.overviewtext = 'Đà Nẵng, 8,3 km tới Trung tâm thành phố';
   }
  ngOnInit() {
  }

}
