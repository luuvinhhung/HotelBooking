import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homesearch',
  templateUrl: './homesearch.component.html',
  styleUrls: ['./homesearch.component.css']
})
export class HomesearchComponent implements OnInit {
  dayNow: Date = new Date(Date.now());
  nhanPhong: Date;
  constructor() { }

  ngOnInit() {
  }
  test() {
    console.log(this.nhanPhong);
  }
}
