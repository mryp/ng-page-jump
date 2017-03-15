import { Component } from '@angular/core';

import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';

export const AppRoutes = [
    {path: "", component: Page1Component},
    {path: "next", component: Page2Component}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log("コンストラクタ");
  }
}
