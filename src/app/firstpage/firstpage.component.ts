import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  location: String = '';
  show: Boolean = true;
  hidden() {
    if (this.show === true) {
      this.show = !this.show;
    }
  }
  constructor() { }

  ngOnInit() {
  }
  search() {
    alert(this.location);
  }
}
