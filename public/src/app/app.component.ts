import { Component } from '@angular/core';

import { ItemsService } from './items.service'; // yc

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _itemsService: ItemsService) {}

}
