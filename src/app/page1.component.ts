import { Component } from '@angular/core';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  name = "ページ1";

  constructor() {
    console.log("コンストラクタ");
  }
}
