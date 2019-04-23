import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../items.service'; // YC
import { Router } from '@angular/router'; // YC

@Component({
  selector: 'app-items-new',
  templateUrl: './items-new.component.html',
  styleUrls: ['./items-new.component.css']
})
export class ItemsNewComponent implements OnInit {
  newItem: any;
  createErrors: any;

  constructor(
    private _itemsService: ItemsService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.resetNewItem();
  }

  createItem() {
    console.log(`\n*** `, this.newItem);
    this._itemsService.createItem(this.newItem).subscribe( (data: any) => {
      if (data.errors) {
        console.log('*******', data.errors);
        this.createErrors = data.errors;
        // back to the same form
        this._router.navigate(['new']);
      } else {
        // Creation was successful.
        // Clean up the form and redirect back to home page
        console.log(`\n*** Created the item\n`, data);
        this.resetNewItem();
        this._router.navigate(['']);
      }
    });
  }

  resetNewItem() {
    this.newItem = {
      name: '',
      description: '',
      price: 0,
      image_url: '',
      buy_url: ''
    };
  }

}
