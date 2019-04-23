import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../items.service'; // YC
import { ActivatedRoute, Params, Router } from '@angular/router'; // YC

@Component({
  selector: 'app-items-all',
  templateUrl: './items-all.component.html',
  styleUrls: ['./items-all.component.css']
})
export class ItemsAllComponent implements OnInit {
  items: any;

  constructor(
    private _itemsService: ItemsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this._itemsService.getItems().subscribe( items => {
      this.items = items;
      console.log(items);
    });
  }

  editItem(id) {
    // Re-route to the edit component
    this._router.navigate([`/${id}/edit`]);
  }

  deleteItem(id) {
    this._itemsService.deleteItem(id).subscribe( item => {
      console.log(`\n*** Deleted ${item}`);
      this.getItems(); // Update the item list
    });
  }

}
